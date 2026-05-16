import React from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {ProfileStackParams, SavedAddress} from '../../../types/navigation';
import {MOCK_ADDRESSES} from './profileMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const AddressList = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  return (
    <SafeInset>
      <Topbar
        text="Address"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <FlatList
        data={MOCK_ADDRESSES}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: SavedAddress}) => (
          <View style={[styles.addressRow, {borderBottomColor: theme.bg_2}]}>
            <View style={[styles.pin, {backgroundColor: theme.bg_2}]}>
              <Text style={{color: theme.text_1}}>📍</Text>
            </View>
            <View style={styles.addressInfo}>
              <Text style={[styles.addressName, {color: theme.text_1}]}>
                {item.name}
              </Text>
              <Text style={[styles.addressText, {color: theme.text_3}]}>
                {item.apartment}, {item.address}
              </Text>
            </View>
            <View style={styles.actions}>
              <Pressable style={styles.iconBtn}>
                <Text style={{color: theme.text_3}}>✏️</Text>
              </Pressable>
              <Pressable style={styles.iconBtn}>
                <Text style={{color: '#EF4444'}}>🗑</Text>
              </Pressable>
            </View>
          </View>
        )}
        contentContainerStyle={[styles.list, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.btnWrap}>
            <Button
              text="Add New Address"
              onPress={() => navigation.navigate(ROUTES.ADD_ADDRESS)}
              style={styles.btn}
            />
          </View>
        }
      />
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pin: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  addressInfo: {
    flex: 1,
  },
  addressName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 13,
    lineHeight: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconBtn: {
    padding: 6,
  },
  btnWrap: {
    marginTop: 32,
  },
  btn: {
    borderRadius: 30,
  },
});

export default AddressList;
