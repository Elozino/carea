/* eslint-disable react-native/no-inline-styles */
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FilterIcon,
  LikeIcon,
  NotificationIcon,
  SearchIcon,
} from '../../../assets/svg';
import FlexTitle from '../../../components/FlexTitle';
import {brands} from '../../../constants/data';
import {ROUTES} from '../../../constants/enums';
import {globalStyle, paddingSizes, textSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {HomeStackParams} from '../../../types/navigation';
import AppTextInput from '../../../components/ui/AppTextInput';
import Animated, {SharedTransition, withSpring} from 'react-native-reanimated';

const customTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});

const Home = () => {
  const theme = useCareaTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const bottomHeight = useBottomTabBarHeight();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottomHeight + Number(paddingSizes.medium),
        }}>
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
            <Pressable onPress={() => navigate(ROUTES.NOTIFICATION)}>
              <NotificationIcon width={30} height={30} fill={theme.btn_bg} />
            </Pressable>
            <Pressable onPress={() => navigate(ROUTES.WISH_LIST)}>
              <LikeIcon width={30} height={25} fill={theme.btn_bg} />
            </Pressable>
          </View>
        </View>

        <View>
          <AppTextInput
            placeholder="Search Product"
            leftIcon={<SearchIcon />}
            rightIcon={<FilterIcon />}
            style={{
              marginHorizontal: paddingSizes.medium,
              marginTop: paddingSizes.large,
              marginBottom: paddingSizes.small,
            }}
            editable={false}
            onPress={() => navigate(ROUTES.SEARCH_PRODUCT)}
          />
        </View>

        {/* special offer */}
        <FlexTitle
          title="Special Offers"
          btnTitle="See All"
          onPress={() => navigate(ROUTES.SPECIAL_OFFER)}
        />
        <View
          style={[styles.specialOfferWrapper, {backgroundColor: theme.bg_2}]}>
          <View style={{flex: 0.5, gap: 10}}>
            <Text
              style={[
                {
                  color: theme.black,
                  fontSize: textSizes.large,
                  fontWeight: '700',
                },
              ]}>
              20%
            </Text>
            <Text
              style={[
                {
                  color: theme.black,
                  fontSize: textSizes.medium,
                  fontWeight: '700',
                },
              ]}>
              Week Deals
            </Text>
            <Text style={[{color: theme.black, fontSize: textSizes.base}]}>
              Get a new car discount only valid this week
            </Text>
          </View>
          <View style={styles.specialOfferImgWarapper}>
            <Image
              source={require('../../../assets/images/car.png')}
              resizeMode="cover"
              style={styles.specialOfferImg}
            />
          </View>
        </View>

        {/* top deals */}
        <FlexTitle
          title="Top Deals"
          btnTitle="See All"
          onPress={() => navigate(ROUTES.TOP_DEALS)}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: paddingSizes.medium,
          }}
          bounces={false}>
          {brands.map((item, index) => (
            <Pressable
              key={item + index}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderWidth: 0.8,
                borderColor: theme.btn_bg,
                borderRadius: 100,
              }}>
              <Text style={[{color: theme.text_1, fontSize: textSizes.base}]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: paddingSizes.medium,
            paddingHorizontal: paddingSizes.medium,
          }}>
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <Pressable
                onPress={() => navigate(ROUTES.PRODUCT_DETAILS)}
                style={{width: '48%'}}
                key={index + item}>
                <View
                  style={[
                    {
                      backgroundColor: theme.bg_2,
                      width: '100%',
                      height: 150,
                      borderRadius: 20,
                      padding: paddingSizes.medium,
                      position: 'relative',
                    },
                  ]}>
                  <Animated.Image
                    source={require('../../../assets/images/car.png')}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%'}}
                    sharedTransitionTag={`product-${index}`}
                    sharedTransitionStyle={customTransition}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: paddingSizes.medium,
                      right: paddingSizes.medium,
                    }}>
                    <LikeIcon width={30} height={25} fill={theme.btn_bg} />
                  </View>
                </View>
                <View style={{gap: 3, marginTop: paddingSizes.small}}>
                  <Text
                    style={{
                      fontSize: textSizes.normal,
                      fontWeight: '700',
                      color: theme.btn_bg,
                    }}>
                    BMW M4 Series
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 14,
                    }}>
                    <Text>Star</Text>
                    <Text>4.5</Text>
                    <View
                      style={{
                        backgroundColor: theme.btn_bg,
                        width: 1,
                        height: 15,
                      }}
                    />
                    <View
                      style={{
                        backgroundColor: theme.bg_2,
                        paddingHorizontal: paddingSizes.small,
                        paddingVertical: paddingSizes.xSmall,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: textSizes.base,
                          color: theme.black,
                        }}>
                        New
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: textSizes.medium,
                      fontWeight: '700',
                      color: theme.btn_bg,
                    }}>
                    $155,000
                  </Text>
                </View>
              </Pressable>
            ))}
        </ScrollView>
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
  specialOfferWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: paddingSizes.medium,
    position: 'relative',
    height: 200,
    marginHorizontal: paddingSizes.medium,
  },
  specialOfferImgWarapper: {
    flex: 0.5,
    position: 'absolute',
    top: 50,
    right: 0,
  },
  specialOfferImg: {
    width: 220,
    height: 100,
  },
  topDealsScroll: {},
});
