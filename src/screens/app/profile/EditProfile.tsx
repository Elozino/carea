import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import AppTextInput from '../../../components/ui/AppTextInput';
import {Button} from '../../../components/ui/Button';
import {getFontSize} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_USER} from './profileMockData';
import useHideBottomBar from '../../../hooks/useHideBottomTab';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const EditProfile = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  const [name, setName] = useState(MOCK_USER.name);
  const [nickname, setNickname] = useState(MOCK_USER.nickname);
  const [phone, setPhone] = useState(MOCK_USER.phone);
  const [email, setEmail] = useState(MOCK_USER.email);
  const [gender, setGender] = useState(MOCK_USER.gender);
  const [dob, setDob] = useState(MOCK_USER.dob);

  return (
    <SafeInset>
      <Topbar
        text="Edit Profile"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        keyboardShouldPersistTaps="handled">
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <Pressable>
            <View style={[styles.avatar, {backgroundColor: theme.btn_bg}]}>
              <View style={styles.avatarText}>
                {/* initials placeholder */}
              </View>
            </View>
            <View style={[styles.cameraIcon, {backgroundColor: theme.btn_bg}]}>
              {/* camera icon placeholder */}
            </View>
          </Pressable>
        </View>

        <AppTextInput label="Name" value={name} onChangeText={setName} />
        <AppTextInput
          label="Nickname"
          value={nickname}
          onChangeText={setNickname}
        />
        <AppTextInput
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <AppTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <AppTextInput label="Gender" value={gender} onChangeText={setGender} />
        <AppTextInput label="Date of Birth" value={dob} onChangeText={setDob} />

        <View style={styles.btnWrap}>
          <Button
            text="Submit"
            disabled={!name.trim()}
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
    gap: getFontSize(16),
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 28,
    marginTop: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {},
  cameraIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  btnWrap: {
    marginTop: 24,
  },
  btn: {
    borderRadius: 30,
  },
});

export default EditProfile;
