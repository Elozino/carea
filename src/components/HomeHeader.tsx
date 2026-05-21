/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {LikeIcon, NotificationIcon} from '../assets/svg';
import {paddingSizes, textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';

interface HomeHeaderProps {
  notificationAction: () => void;
  likeAction: () => void;
}

const HomeHeader = ({notificationAction, likeAction}: HomeHeaderProps) => {
  const theme = useCareaTheme();
  return (
    <View style={[styles.headerWrapper, styles.wrapper]}>
      <View style={styles.profileWrapper}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/66180398?v=4',
          }}
          style={styles.profileImg}
          resizeMode="cover"
        />
        <View>
          <Text style={[{color: theme.text_1}]}>Good Morning 👋</Text>
          <Text
            style={[
              {
                color: theme.text_1,
                fontWeight: '800',
                fontSize: textSizes.medium,
                letterSpacing: 0.6,
              },
            ]}>
            Elozino Ovedhe
          </Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <Pressable onPress={notificationAction}>
          <NotificationIcon width={30} height={30} fill={theme.btn_bg} />
        </Pressable>
        <Pressable onPress={likeAction}>
          <LikeIcon width={30} height={25} fill={theme.btn_bg} />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: paddingSizes.medium,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: paddingSizes.medium,
  },
  profileWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
});
