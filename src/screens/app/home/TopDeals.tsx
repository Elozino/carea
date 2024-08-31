/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import NotFound from '../../../components/common/NotFound';
import SafeInset from '../../../components/layout/SafeInset';
import ProductListing from '../../../components/ProductListing';
import Topbar from '../../../components/Topbar';
import {brands} from '../../../constants/data';
import {getFontSize, paddingSizes, textSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';

const TopDeals = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <SafeInset>
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
      <FlatList
        data={Array.from({length: 0})}
        renderItem={({}) => <ProductListing />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{flexGrow: 1}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          gap: getFontSize(10),
          paddingTop: Number(paddingSizes.medium) / 2,
          paddingBottom: Number(paddingSizes.medium),
          paddingHorizontal: paddingSizes.medium,
        }}
        ListEmptyComponent={NotFound}
      />
    </SafeInset>
  );
};

export default TopDeals;
