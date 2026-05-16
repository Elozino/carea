import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlurView} from 'expo-blur';
import {
  borderWidths,
  letterSpacings,
  opacityLevels,
  paddingSizes,
  radiusSizes,
  shadowPresets,
  textSizes,
} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

type WalletBalanceCardProps = {
  balance: number;
  cardLabel?: string;
  last4?: string;
};

const formatBalance = (n: number) => '$' + n.toLocaleString('en-US');

const WalletBalanceCard = ({
  balance,
  cardLabel = 'My E-Wallet',
  last4,
}: WalletBalanceCardProps) => {
  const theme = useCareaTheme();

  return (
    <View style={[styles.shell, {shadowColor: theme.shadowColor}]}>
      <View style={[styles.card, {borderColor: theme.glass.border.medium}]}>
        <BlurView
          intensity={theme.glass.blurIntensity.strong}
          tint={theme.glass.blurTint}
          style={StyleSheet.absoluteFill}
        />
        <View
          pointerEvents="none"
          style={[
            styles.membrane,
            {backgroundColor: theme.glass.background.strong},
          ]}
        />
        <View
          pointerEvents="none"
          style={[
            styles.highlight,
            {backgroundColor: theme.glass.highlight.soft},
          ]}
        />
        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={[styles.cardLabel, {color: theme.text.secondary}]}>
              {cardLabel}
            </Text>
            <View style={styles.networkRow}>
              <View
                style={[
                  styles.circle,
                  styles.circleLeft,
                  {backgroundColor: theme.brand.mastercardRed},
                ]}
              />
              <View
                style={[
                  styles.circle,
                  styles.circleRight,
                  {backgroundColor: theme.brand.mastercardOrange},
                ]}
              />
            </View>
          </View>
          <Text style={[styles.balance, {color: theme.text.primary}]}>
            {formatBalance(balance)}
          </Text>
          <View style={styles.bottomRow}>
            {last4 ? (
              <Text style={[styles.cardNum, {color: theme.text.secondary}]}>
                ●●●● ●●●● ●●●● {last4}
              </Text>
            ) : (
              <Text style={[styles.cardType, {color: theme.text.primary}]}>
                VISA
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shell: {
    marginHorizontal: paddingSizes.medium_1,
    marginBottom: paddingSizes.large_1,
    borderRadius: radiusSizes.xLarge,
    ...shadowPresets.floating,
  },
  card: {
    overflow: 'hidden',
    borderRadius: radiusSizes.xLarge,
    borderWidth: borderWidths.thin,
  },
  membrane: {
    ...StyleSheet.absoluteFillObject,
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: paddingSizes.medium,
    right: paddingSizes.medium,
    height: borderWidths.thin,
    borderRadius: borderWidths.thin,
  },
  content: {
    padding: paddingSizes.large_1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: paddingSizes.medium_1,
  },
  cardLabel: {
    fontSize: textSizes.base,
    fontWeight: '500',
    opacity: opacityLevels.soft,
  },
  networkRow: {
    flexDirection: 'row',
  },
  circle: {
    width: radiusSizes.xLarge,
    height: radiusSizes.xLarge,
    borderRadius: radiusSizes.medium,
    opacity: opacityLevels.soft,
  },
  circleLeft: {
    marginRight: -(radiusSizes.xSmall + borderWidths.thick),
  },
  circleRight: {},
  balance: {
    fontSize: textSizes.large_1,
    fontWeight: '800',
    marginBottom: paddingSizes.medium_1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardNum: {
    fontSize: textSizes.base,
    letterSpacing: letterSpacings.wider,
    opacity: opacityLevels.soft,
  },
  cardType: {
    fontSize: textSizes.medium,
    fontWeight: '800',
    fontStyle: 'italic',
    opacity: opacityLevels.strong,
  },
});

export default WalletBalanceCard;
