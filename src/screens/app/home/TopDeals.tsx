/* eslint-disable react-native/no-inline-styles */
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
import {ArrowLeftIcon, LikeIcon} from '../../../assets/svg';
import Topbar from '../../../components/Topbar';
import {globalStyle, paddingSizes, textSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';
import {brands} from '../../../constants/data';

const TopDeals = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Topbar
        text={'Top Deals'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <View style={{paddingBottom: Number(paddingSizes.medium) / 2}}>
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
      </View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
          marginTop: Number(paddingSizes.medium) / 2,
          paddingHorizontal: paddingSizes.medium,
        }}>
        {Array(10)
          .fill(0)
          .map((item, index) => (
            <View style={{width: '48%'}} key={index + item}>
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
                <Image
                  source={require('../../../assets/images/car.png')}
                  resizeMode="cover"
                  style={{width: '100%', height: '100%'}}
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
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default TopDeals;

const styles = StyleSheet.create({});
