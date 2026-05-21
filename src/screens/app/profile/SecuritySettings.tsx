import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import SettingsRow from '../../../components/ui/SettingsRow';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const SecuritySettings = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [faceId, setFaceId] = useState(true);
  const [biometric, setBiometric] = useState(false);

  return (
    <SafeInset>
      <Topbar
        text="Security"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <SettingsRow
          label="Face ID"
          rightElement="toggle"
          active={faceId}
          onToggle={setFaceId}
        />
        <SettingsRow
          label="PIN Management"
          rightElement="arrow"
          onPress={() => {}}
        />
        <SettingsRow
          label="Biometric ID"
          rightElement="toggle"
          active={biometric}
          onToggle={setBiometric}
        />
        <SettingsRow
          label="Change Password"
          rightElement="arrow"
          onPress={() => {}}
        />
        <SettingsRow
          label="Two-Factor Authentication"
          rightElement="arrow"
          onPress={() => {}}
        />
      </View>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default SecuritySettings;
