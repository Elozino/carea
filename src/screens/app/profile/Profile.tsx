import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {selectContactPhone} from 'react-native-select-contact';
import SafeInset from '../../../components/layout/SafeInset';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Profile = () => {
  const theme = useCareaTheme();

  async function getPhoneNumber() {
    return selectContactPhone().then(selection => {
      if (!selection) {
        return null;
      }

      let {contact, selectedPhone} = selection;
      console.log(
        `Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`,
      );
      return selectedPhone.number;
    });
  }

  return (
    <SafeInset>
      <Text>Profile</Text>

      <Button title="Click" onPress={getPhoneNumber} />
    </SafeInset>
  );
};

export default Profile;

const styles = StyleSheet.create({});
