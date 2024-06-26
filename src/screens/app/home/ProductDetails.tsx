import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParams} from '../../../types/navigation';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {globalStyle} from '../../../constants/styles';
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

const ProductDetails = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Animated.Image
        source={require('../../../assets/images/car.png')}
        resizeMode="cover"
        style={{width: 300, height: 200}}
        sharedTransitionTag="product-1"
        sharedTransitionStyle={customTransition}
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
