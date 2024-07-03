import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../constants/enums';
import {
  Home,
  Notification,
  ProductDetails,
  SearchProduct,
  SpecialOffer,
  TopDeals,
  WishList,
} from '../screens';
import {HomeStackParams} from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.NOTIFICATION} component={Notification} />
      <Stack.Screen name={ROUTES.WISH_LIST} component={WishList} />
      <Stack.Screen name={ROUTES.TOP_DEALS} component={TopDeals} />
      <Stack.Screen name={ROUTES.SPECIAL_OFFER} component={SpecialOffer} />
      <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetails} />
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
        }}>
        <Stack.Screen name={ROUTES.SEARCH_PRODUCT} component={SearchProduct} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
