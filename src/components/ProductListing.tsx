/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import {paddingSizes, textSizes} from '../constants/styles';
import {LikeIcon} from '../assets/svg';
import useCareaTheme from '../hooks/useCareaTheme';

const ProductListing = () => {
  const theme = useCareaTheme();
  return (
    <View style={{width: '48%'}}>
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
          source={require('../assets/images/car.png')}
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
          <Text
            style={{
              color: theme.btn_bg,
            }}>
            Star
          </Text>
          <Text
            style={{
              color: theme.btn_bg,
            }}>
            4.5
          </Text>
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
  );
};

export default ProductListing;
