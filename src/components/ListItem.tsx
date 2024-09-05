/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {TelephoneIcon} from '../assets/svg';
import {getFontSize, textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';

interface ListItem {
  activeTab: 'chats' | 'calls';
  navigateToCall?: () => void;
  navigateToScreen: () => void;
}
const ListItem: FC<ListItem> = ({navigateToCall, navigateToScreen}) => {
  const theme = useCareaTheme();

  return (
    <Pressable
      onPress={navigateToScreen}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: getFontSize(16),
      }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1680844540129-48dacc7d5d88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtdyUyMGxvZ298ZW58MHx8MHx8fDA%3D',
        }}
        resizeMode="cover"
        style={{
          width: getFontSize(70),
          height: getFontSize(70),
          borderRadius: getFontSize(70),
        }}
      />
      <View style={{flex: 1, gap: getFontSize(5)}}>
        <Text style={{fontWeight: '700', fontSize: textSizes.normal}}>
          BMW Store
        </Text>
        <Text style={{fontWeight: '500', fontSize: textSizes.base}}>
          Sub Text
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToCall}>
          <TelephoneIcon fill={theme.btn_bg} width={25} height={25} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ListItem;
