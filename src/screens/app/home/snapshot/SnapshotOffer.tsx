/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  DimensionValue,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ArrowLeftIcon, XIcon} from '../../../../assets/svg';
import SafeInset from '../../../../components/layout/SafeInset';
import Topbar from '../../../../components/Topbar';
import AppModal from '../../../../components/ui/AppModal';
import {Button} from '../../../../components/ui/Button';
import NumericKeypad from '../../../../components/ui/NumericKeypad';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {
  HomeStackParams,
  SnapshotCheckoutDraft,
} from '../../../../types/navigation';
import {createInitialDraft, formatCurrency, parseCurrency} from './mockData';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_OFFER'>;
type BidLeader = 'self' | 'rival';
type BidHistoryItem = {
  id: string;
  bidder: string;
  amount: number;
  owner: BidLeader;
  note: string;
};

const AUCTION_WINDOW_SECONDS = 15;
const BID_INCREMENT = 1000;
const RIVAL_NAMES = ['Northline Auto', 'Apex Garage', 'MetroBid'];

const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');

  return `${mins}:${secs}`;
};

const SnapshotOffer = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const sellerAsk = parseCurrency(route.params.price);
  const openingBid = Math.max(sellerAsk - 12000, BID_INCREMENT * 10);
  const rivalProfiles = useMemo(
    () => [
      {name: RIVAL_NAMES[0], ceiling: openingBid + 2500, step: 1000},
      {name: RIVAL_NAMES[1], ceiling: sellerAsk - 2500, step: 1500},
      {name: RIVAL_NAMES[2], ceiling: sellerAsk - 1000, step: 2000},
    ],
    [openingBid, sellerAsk],
  );
  const [showKeypad, setShowKeypad] = useState(false);
  const [offerAmount, setOfferAmount] = useState(
    String(openingBid + BID_INCREMENT),
  );
  const [currentHighestBid, setCurrentHighestBid] = useState(openingBid);
  const [activeOwner, setActiveOwner] = useState<BidLeader>('rival');
  const [activeBidderName, setActiveBidderName] = useState(RIVAL_NAMES[0]);
  const [offerStatus, setOfferStatus] =
    useState<SnapshotCheckoutDraft['offerStatus']>('draft');
  const [bidAttempts, setBidAttempts] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(AUCTION_WINDOW_SECONDS);
  const [auctionWinner, setAuctionWinner] = useState<BidLeader | null>(null);
  const [lastCounterBid, setLastCounterBid] = useState(String(openingBid));
  const [statusMessage, setStatusMessage] = useState(
    'Auction is live. Beat the current high bid before the countdown expires.',
  );
  const [bidHistory, setBidHistory] = useState<BidHistoryItem[]>([
    {
      id: 'opening-bid',
      bidder: RIVAL_NAMES[0],
      amount: openingBid,
      owner: 'rival',
      note: 'Opened the live auction',
    },
  ]);
  const counterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (counterTimeoutRef.current) {
        clearTimeout(counterTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (auctionWinner) {
      return;
    }

    if (timeRemaining <= 0) {
      if (counterTimeoutRef.current) {
        clearTimeout(counterTimeoutRef.current);
      }

      if (activeOwner === 'self') {
        setAuctionWinner('self');
        setOfferStatus('accepted');
        setStatusMessage(
          'Hammer down. You held the lead to the end and won the auction.',
        );
      } else {
        setAuctionWinner('rival');
        setOfferStatus('declined');
        setStatusMessage(
          `${activeBidderName} held the lead until the timer expired.`,
        );
      }

      return;
    }

    const countdown = setTimeout(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(countdown);
  }, [activeBidderName, activeOwner, auctionWinner, timeRemaining]);

  const context = useMemo(
    () => ({
      productName: route.params.productName,
      price: route.params.price,
    }),
    [route.params.price, route.params.productName],
  );

  const draft = useMemo(
    () => ({
      ...createInitialDraft(context),
      offerAmount: String(currentHighestBid),
      offerStatus,
      bidAttempts,
      lastCounterBid,
    }),
    [context, currentHighestBid, offerStatus, bidAttempts, lastCounterBid],
  );

  const typedBidAmount = parseCurrency(offerAmount);
  const minimumNextBid = currentHighestBid + BID_INCREMENT;
  const isLeading = activeOwner === 'self' && !auctionWinner;
  const isWinner = auctionWinner === 'self';
  const isLoser = auctionWinner === 'rival';
  const timeProgress = `${Math.max(
    (timeRemaining / AUCTION_WINDOW_SECONDS) * 100,
    0,
  )}%` as DimensionValue;
  const statusPillText = isWinner
    ? 'Winning Bid'
    : isLoser
    ? 'Auction Closed'
    : isLeading
    ? 'You Are Leading'
    : bidAttempts > 0
    ? 'You Have Been Outbid'
    : 'Auction Live';

  const pushHistory = (entry: Omit<BidHistoryItem, 'id'>) => {
    setBidHistory(prev => [
      {
        id: `${entry.bidder}-${Date.now()}-${prev.length}`,
        ...entry,
      },
      ...prev,
    ]);
  };

  const scheduleRivalCounter = (latestBid: number) => {
    if (counterTimeoutRef.current) {
      clearTimeout(counterTimeoutRef.current);
    }

    const nextRequiredBid = latestBid + BID_INCREMENT;
    const rival = rivalProfiles.find(
      profile => profile.ceiling >= nextRequiredBid,
    );

    if (!rival) {
      setStatusMessage(
        'You are leading. No rival has topped your bid yet. Hold the line until the timer ends.',
      );
      return;
    }

    const rivalBid = Math.max(
      nextRequiredBid,
      Math.min(rival.ceiling, latestBid + rival.step),
    );

    counterTimeoutRef.current = setTimeout(() => {
      setActiveOwner('rival');
      setActiveBidderName(rival.name);
      setCurrentHighestBid(rivalBid);
      setLastCounterBid(String(rivalBid));
      setOfferStatus('declined');
      setTimeRemaining(AUCTION_WINDOW_SECONDS);
      setOfferAmount(String(rivalBid + BID_INCREMENT));
      setStatusMessage(
        `${rival.name} countered your bid. You are no longer the active high bidder.`,
      );
      pushHistory({
        bidder: rival.name,
        amount: rivalBid,
        owner: 'rival',
        note: 'Countered in the final seconds',
      });
    }, 2600);
  };

  const appendDigit = (digit: string) => {
    setOfferAmount(prev => `${prev}${digit}`.replace(/^0+(?=\d)/, ''));
  };

  const deleteDigit = () => {
    setOfferAmount(prev => prev.slice(0, -1));
  };

  const updateBidBy = (delta: number) => {
    const baseAmount = typedBidAmount || minimumNextBid;
    const nextBid = Math.max(minimumNextBid, baseAmount + delta);
    setOfferAmount(nextBid.toString());
  };

  const jumpBackIn = () => setOfferAmount(String(minimumNextBid));

  const submitBid = () => {
    if (auctionWinner) {
      return;
    }

    if (typedBidAmount < minimumNextBid) {
      setOfferAmount(String(minimumNextBid));
      setStatusMessage(
        `You need at least ${formatCurrency(
          String(minimumNextBid),
        )} to retake the lead.`,
      );
      return;
    }

    if (counterTimeoutRef.current) {
      clearTimeout(counterTimeoutRef.current);
    }

    setBidAttempts(prev => prev + 1);
    setCurrentHighestBid(typedBidAmount);
    setActiveOwner('self');
    setActiveBidderName('You');
    setOfferStatus('pending');
    setTimeRemaining(AUCTION_WINDOW_SECONDS);
    setStatusMessage(
      'Bid placed. You are the active high bidder. Hold your lead until the clock expires.',
    );
    pushHistory({
      bidder: 'You',
      amount: typedBidAmount,
      owner: 'self',
      note: 'Took the lead',
    });
    scheduleRivalCounter(typedBidAmount);
  };

  return (
    <SafeInset>
      <Topbar
        text="Live Auction"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <ScrollView
        contentContainerStyle={{
          padding: paddingSizes.medium,
          gap: Number(paddingSizes.medium),
        }}>
        <View style={[styles.heroCard, {backgroundColor: theme.bg_2}]}>
          <View style={styles.heroHeader}>
            <View style={{flex: 1}}>
              <Text style={[styles.title, {color: theme.btn_bg}]}>
                {context.productName}
              </Text>
              <Text style={{color: theme.text_3}}>
                Seller ask: {context.price}
              </Text>
            </View>
            <View
              style={[
                styles.statusPill,
                {
                  backgroundColor:
                    isLeading || isWinner ? theme.btn_bg : theme.btn_bg1,
                },
              ]}>
              <Text
                style={{
                  color: isLeading || isWinner ? theme.btn_text : theme.btn_bg,
                  fontWeight: '700',
                }}>
                {statusPillText}
              </Text>
            </View>
          </View>

          <View style={styles.heroMetrics}>
            <View style={{flex: 1}}>
              <Text style={{color: theme.text_3}}>Current high bid</Text>
              <Text style={[styles.offerText, {color: theme.btn_bg}]}>
                {formatCurrency(String(currentHighestBid))}
              </Text>
              <Text style={{color: theme.text_3}}>
                Active bidder: {activeBidderName}
              </Text>
            </View>
            <View style={styles.timerWrap}>
              <Text style={{color: theme.text_3}}>Time remaining</Text>
              <Text style={[styles.timerText, {color: theme.btn_bg}]}>
                {formatTimer(timeRemaining)}
              </Text>
            </View>
          </View>

          <View
            style={[styles.progressTrack, {backgroundColor: theme.btn_bg1}]}>
            <View
              style={[
                styles.progressFill,
                {backgroundColor: theme.btn_bg, width: timeProgress},
              ]}
            />
          </View>

          <Text style={{color: theme.text_3}}>{statusMessage}</Text>
        </View>

        <View style={[styles.card, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
            Place Your Bid Fast
          </Text>
          <Text style={{color: theme.text_3}}>
            Minimum next bid: {formatCurrency(String(minimumNextBid))}. Tap the
            amount or use quick raise buttons.
          </Text>
          <Pressable
            style={[styles.offerValue, {borderColor: theme.gray}]}
            onPress={() => setShowKeypad(true)}>
            <Text style={[styles.offerText, {color: theme.btn_bg}]}>
              {formatCurrency(offerAmount)}
            </Text>
          </Pressable>
          <View style={styles.quickBidRow}>
            <Button
              text="+1k"
              style={[styles.quickBidButton, {backgroundColor: theme.gray}]}
              onPress={() => updateBidBy(1000)}
            />
            <Button
              text="+2.5k"
              style={[styles.quickBidButton, {backgroundColor: theme.gray}]}
              onPress={() => updateBidBy(2500)}
            />
            <Button
              text="+5k"
              style={[styles.quickBidButton, {backgroundColor: theme.gray}]}
              onPress={() => updateBidBy(5000)}
            />
          </View>
          {!isLeading && !auctionWinner ? (
            <Pressable
              style={[styles.counterBidChip, {borderColor: theme.btn_bg}]}
              onPress={jumpBackIn}>
              <Text style={{color: theme.btn_bg, fontWeight: '600'}}>
                Jump back in at {formatCurrency(String(minimumNextBid))}
              </Text>
            </Pressable>
          ) : null}
          <Button
            text={bidAttempts > 0 ? 'Bid Again' : 'Place Bid Now'}
            onPress={submitBid}
            style={{
              backgroundColor: auctionWinner ? theme.gray : theme.btn_bg,
            }}
            disabled={auctionWinner !== null}
          />
        </View>

        <View style={[styles.card, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
            Live Activity
          </Text>
          <Text style={{color: theme.text_3}}>
            Follow every counter in real time. The last active high bidder when
            the clock hits zero wins.
          </Text>
          <View style={styles.activityList}>
            {bidHistory.map(item => (
              <View
                key={item.id}
                style={[
                  styles.activityItem,
                  {
                    backgroundColor:
                      item.owner === 'self' ? theme.btn_bg1 : theme.bg_1,
                    borderColor: theme.gray,
                  },
                ]}>
                <View style={{flex: 1}}>
                  <Text style={{color: theme.btn_bg, fontWeight: '700'}}>
                    {item.bidder}
                  </Text>
                  <Text style={{color: theme.text_3}}>{item.note}</Text>
                </View>
                <Text style={{color: theme.btn_bg, fontWeight: '700'}}>
                  {formatCurrency(String(item.amount))}
                </Text>
              </View>
            ))}
          </View>
          <Text style={{color: theme.text_3}}>
            Your bid attempts: {bidAttempts}
          </Text>
        </View>

        {isWinner ? (
          <Button
            text="Continue to Checkout"
            onPress={() =>
              navigation.navigate(ROUTES.SNAPSHOT_SHIPPING, {draft})
            }
          />
        ) : null}

        {isLoser ? (
          <Button
            text="Back To Listing"
            style={{backgroundColor: theme.gray}}
            onPress={() => navigation.goBack()}
          />
        ) : null}
      </ScrollView>

      <AppModal
        visible={showKeypad}
        animationType="slide"
        position="bottom"
        statusBarTranslucent
        onRequestClose={() => setShowKeypad(false)}>
        <View style={[styles.modalBody, {backgroundColor: theme.btn_bg1}]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
              Edit Bid Amount
            </Text>
            <Pressable onPress={() => setShowKeypad(false)}>
              <XIcon width={20} height={20} fill={theme.btn_bg} />
            </Pressable>
          </View>
          <Text
            style={[
              styles.offerText,
              {color: theme.btn_bg, textAlign: 'center'},
            ]}>
            {formatCurrency(offerAmount)}
          </Text>
          <NumericKeypad
            onDigitPress={appendDigit}
            onDeletePress={deleteDigit}
            onSubmitPress={() => setShowKeypad(false)}
            submitLabel="Done"
            disableSubmit={!offerAmount.length || auctionWinner !== null}
          />
        </View>
      </AppModal>
    </SafeInset>
  );
};

export default SnapshotOffer;

const styles = StyleSheet.create({
  heroCard: {
    borderRadius: 20,
    padding: paddingSizes.medium,
    gap: Number(paddingSizes.small),
  },
  card: {
    borderRadius: 16,
    padding: paddingSizes.medium,
    gap: Number(paddingSizes.small),
  },
  heroHeader: {
    flexDirection: 'row',
    gap: Number(paddingSizes.small),
    alignItems: 'flex-start',
  },
  heroMetrics: {
    flexDirection: 'row',
    gap: Number(paddingSizes.medium),
    alignItems: 'flex-end',
  },
  title: {
    fontSize: textSizes.medium,
    fontWeight: '700',
  },
  timerWrap: {
    alignItems: 'flex-end',
  },
  timerText: {
    fontSize: textSizes.medium_1,
    fontWeight: '800',
  },
  statusPill: {
    borderRadius: 999,
    paddingHorizontal: paddingSizes.small,
    paddingVertical: paddingSizes.xSmall,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
  },
  offerValue: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: paddingSizes.small,
    paddingHorizontal: paddingSizes.medium,
  },
  offerText: {
    fontSize: textSizes.medium_1,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: textSizes.normal,
    fontWeight: '700',
  },
  quickBidRow: {
    flexDirection: 'row',
    gap: Number(paddingSizes.small),
  },
  quickBidButton: {
    flex: 1,
    height: 40,
  },
  counterBidChip: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: paddingSizes.small,
    paddingVertical: paddingSizes.small,
  },
  activityList: {
    gap: Number(paddingSizes.small),
  },
  activityItem: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: paddingSizes.small,
    paddingVertical: paddingSizes.small,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Number(paddingSizes.small),
  },
  modalBody: {
    padding: paddingSizes.medium,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    gap: Number(paddingSizes.medium),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
