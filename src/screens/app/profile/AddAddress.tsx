import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import AppTextInput from '../../../components/ui/AppTextInput';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const AddAddress = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  const [addressName, setAddressName] = useState("Name's House");
  const [apartment, setApartment] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <SafeInset>
      <Topbar
        text="Add New Address"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        keyboardShouldPersistTaps="handled">
        {/* Map placeholder */}
        <View style={[styles.mapPlaceholder, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.mapLabel, {color: theme.text_3}]}>📍</Text>
          <Text style={[styles.mapHint, {color: theme.text_3}]}>
            Map view — tap to set location
          </Text>
        </View>

        <View style={[styles.formCard, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.formTitle, {color: theme.text_1}]}>
            Address Details
          </Text>
          <AppTextInput
            label="Name"
            value={addressName}
            onChangeText={setAddressName}
          />
          <AppTextInput
            label="Apartment / Suite"
            value={apartment}
            onChangeText={setApartment}
          />
          <AppTextInput
            label="Address"
            value={address}
            onChangeText={setAddress}
          />
          <AppTextInput
            label="Address Details"
            value={details}
            onChangeText={setDetails}
          />
          <AppTextInput label="Notes" value={notes} onChangeText={setNotes} />
        </View>

        <View style={styles.btnWrap}>
          <Button
            text="Add Address"
            disabled={!addressName.trim() || !address.trim()}
            onPress={() => navigation.goBack()}
            style={styles.btn}
          />
        </View>
      </ScrollView>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  mapPlaceholder: {
    height: 200,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mapLabel: {
    fontSize: 40,
    marginBottom: 8,
  },
  mapHint: {
    fontSize: 13,
  },
  formCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  btnWrap: {
    marginTop: 24,
  },
  btn: {
    borderRadius: 30,
  },
});

export default AddAddress;
