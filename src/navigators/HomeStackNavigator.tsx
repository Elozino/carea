import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../constants/enums';
import {Home, Notification, SearchProduct, WishList} from '../screens';
import {HomeStackParams} from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.NOTIFICATION} component={Notification} />
      <Stack.Screen name={ROUTES.WISH_LIST} component={WishList} />
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
