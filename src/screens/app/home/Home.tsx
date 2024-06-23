/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {useNavigation} from '@react-navigation/native';
import {globalStyle, paddingSizes, textSizes} from '../../../constants/styles';
import {LikeIcon, NotificationIcon} from '../../../assets/svg';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const Home = () => {
  const theme = useCareaTheme();
  const {navigate} = useNavigation();
  const bottomHeight = useBottomTabBarHeight();
  return (
    <View
      style={[
        globalStyle.container,
        styles.wrapper,
        {backgroundColor: theme.bg_1},
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottomHeight + Number(paddingSizes.medium),
        }}>
        <View style={styles.headerWrapper}>
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
            <Pressable>
              <NotificationIcon width={30} height={30} fill={theme.btn_bg} />
            </Pressable>
            <Pressable>
              <LikeIcon width={30} height={25} fill={theme.btn_bg} />
            </Pressable>
          </View>
        </View>
        {/* {Array(20)
          .fill(0)
          .map(item => (
            <View style={styles.headerWrapper}>
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
                <Pressable>
                  <NotificationIcon
                    width={30}
                    height={30}
                    fill={theme.btn_bg}
                  />
                </Pressable>
                <Pressable>
                  <LikeIcon width={30} height={25} fill={theme.btn_bg} />
                </Pressable>
              </View>
            </View>
          ))} */}
      </ScrollView>
    </View>
  );
};

export default Home;

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
