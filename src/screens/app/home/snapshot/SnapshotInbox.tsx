/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../../assets/svg';
import ListItem from '../../../../components/ListItem';
import SafeInset from '../../../../components/layout/SafeInset';
import Topbar from '../../../../components/Topbar';
import {Button} from '../../../../components/ui/Button';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_INBOX'>;

const SnapshotInbox = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();

  const context = route.params ?? {
    productName: 'BMW M4 Series',
    price: '$175,000',
  };

  return (
    <SafeInset>
      <Topbar
        text="Inbox"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <View style={{paddingHorizontal: paddingSizes.medium, marginBottom: 14}}>
        <Text style={[styles.title, {color: theme.btn_bg}]}>
          {context.productName}
        </Text>
        <Text style={{color: theme.text_3}}>
          Enter the live auction room and react to bids before the countdown
          ends.
        </Text>
      </View>
      <FlatList
        data={Array.from({length: 5})}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <ListItem
            activeTab="chats"
            navigateToScreen={() =>
              navigation.navigate(ROUTES.SNAPSHOT_CHAT, context)
            }
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: paddingSizes.medium,
          gap: Number(paddingSizes.small),
          paddingBottom: Platform.OS === 'ios' ? 70 : 100,
        }}
      />
      <View style={styles.footer}>
        <Button
          text="Enter Auction Chat"
          onPress={() => navigation.navigate(ROUTES.SNAPSHOT_CHAT, context)}
        />
      </View>
    </SafeInset>
  );
};

export default SnapshotInbox;

const styles = StyleSheet.create({
  title: {
    fontSize: textSizes.medium,
    fontWeight: '700',
  },
  footer: {
    paddingHorizontal: paddingSizes.medium,
    paddingBottom: paddingSizes.medium,
  },
});
