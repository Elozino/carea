/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Animated, {SharedTransition, withTiming} from 'react-native-reanimated';
import {
  ArrowLeftIcon,
  ChatIcon,
  LikeIcon,
  TelephoneIcon,
} from '../../../assets/svg';
import Topbar from '../../../components/Topbar';
import {globalStyle, paddingSizes, textSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';
import {Button} from '../../../components';
import SafeInset from '../../../components/layout/SafeInset';

const customTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight),
    width: withTiming(values.targetWidth),
    originX: withTiming(values.targetOriginX),
    originY: withTiming(values.targetOriginY),
  };
});

const ProductDetails = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {navigate, goBack} =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <SafeInset>
      <Topbar
        text=""
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        rightIcon={<LikeIcon width={25} height={25} fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <ScrollView
        contentContainerStyle={{
          padding: paddingSizes.medium,
          gap: 15,
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.Image
            source={require('../../../assets/images/car.png')}
            resizeMode="cover"
            style={{width: 300, height: 200}}
            sharedTransitionTag="product-1"
            sharedTransitionStyle={customTransition}
          />
          <View style={{flexDirection: 'row', gap: 10}}>
            {['red', 'blue', 'yellow'].map(item => (
              <View
                key={item}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: item,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>✔️</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{gap: 3, marginTop: paddingSizes.small}}>
          <Text
            style={{
              fontSize: textSizes.medium_1,
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
            <Text>Star</Text>
            <Text>4.5</Text>
            <Text>(86 reviews)</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.subTitle, {color: theme.btn_bg}]}>
            Description
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={[styles.subText, {color: theme.text_3}]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            beatae sequi magni ipsa quam, architecto iusto quasi doloremque
            aliquid non.
          </Text>
        </View>
        <View>
          <Text style={[styles.subTitle, {color: theme.btn_bg}]}>
            Gallery Photo
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={[styles.subText, {color: theme.text_3}]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            beatae sequi magni ipsa quam, architecto iusto quasi doloremque
            aliquid non.
          </Text>
        </View>
        <View style={{marginTop: 'auto', gap: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: theme.btn_bg}}>BMW Store</Text>
              <Text style={{color: theme.btn_bg}}>Official Account of BMW</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 20}}>
              <ChatIcon fill={theme.btn_bg} width={30} height={30} />
              <TelephoneIcon fill={theme.btn_bg} width={30} height={25} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{color: theme.btn_bg}}>Price</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: textSizes.medium,
                  color: theme.btn_bg,
                }}>
                $175,000
              </Text>
            </View>
            <View>
              <Button text="Make an Offer" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeInset>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: {},
  subTitle: {
    fontSize: textSizes.medium,
    fontWeight: '600',
    marginBottom: 10,
  },
  subText: {},
});
