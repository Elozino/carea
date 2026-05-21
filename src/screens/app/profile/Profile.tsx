import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import SettingsRow from '../../../components/ui/SettingsRow';
import AppModal from '../../../components/ui/AppModal';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ROUTES} from '../../../constants/enums';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_USER} from './profileMockData';
import {getFontSize} from '../../../constants/styles';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const Profile = () => {
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [logoutVisible, setLogoutVisible] = useState(false);

  return (
    <SafeInset>
      <Topbar text="Profile" />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}>
        {/* Avatar section */}
        <View style={styles.avatarSection}>
          <View style={[styles.avatar, {backgroundColor: theme.btn_bg}]}>
            <Text style={[styles.avatarInitials, {color: theme.btn_text}]}>
              AA
            </Text>
          </View>
          <Text style={[styles.name, {color: theme.text_1}]}>
            {MOCK_USER.name}
          </Text>
          <Text style={[styles.subtitle, {color: theme.text_3}]}>
            {MOCK_USER.email}
          </Text>
          <Pressable
            style={[styles.editBtn, {borderColor: theme.btn_bg}]}
            onPress={() => navigation.navigate(ROUTES.EDIT_PROFILE)}>
            <Text style={[styles.editBtnText, {color: theme.btn_bg}]}>
              Edit Profile
            </Text>
          </Pressable>
        </View>

        {/* Settings list */}
        <View style={styles.settingsList}>
          <SettingsRow
            label="Address"
            onPress={() => navigation.navigate(ROUTES.ADDRESS_LIST)}
          />
          <SettingsRow
            label="Notifications"
            onPress={() => navigation.navigate(ROUTES.NOTIFICATION_SETTINGS)}
          />
          <SettingsRow
            label="Payment"
            onPress={() => navigation.navigate(ROUTES.PAYMENT_METHODS)}
          />
          <SettingsRow
            label="Security"
            onPress={() => navigation.navigate(ROUTES.SECURITY_SETTINGS)}
          />
          <SettingsRow
            label="Language"
            value="English US"
            onPress={() => navigation.navigate(ROUTES.LANGUAGE_SETTINGS)}
          />
          <SettingsRow
            label="Privacy Policy"
            onPress={() => navigation.navigate(ROUTES.PRIVACY_POLICY)}
          />
          <SettingsRow
            label="Help Center"
            onPress={() => navigation.navigate(ROUTES.HELP_CENTER)}
          />
          <SettingsRow
            label="Invite Friends"
            onPress={() => navigation.navigate(ROUTES.INVITE_FRIENDS)}
          />
          <SettingsRow
            label="Logout"
            dangerous
            rightElement="none"
            onPress={() => setLogoutVisible(true)}
          />
        </View>
      </ScrollView>

      {/* Logout confirmation modal (Screen 82) */}
      <AppModal
        visible={logoutVisible}
        animationType="fade"
        position="center"
        statusBarTranslucent
        onRequestClose={() => setLogoutVisible(false)}>
        <View style={[styles.modalCard, {backgroundColor: theme.bg_1}]}>
          <Text style={[styles.modalTitle, {color: theme.text_1}]}>Logout</Text>
          <Text style={[styles.modalBody, {color: theme.text_3}]}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.modalActions}>
            <Button
              text="Cancel"
              onPress={() => setLogoutVisible(false)}
              style={[
                styles.modalBtn,
                styles.cancelBtn,
                {borderColor: theme.btn_bg},
              ]}
              textStyle={{color: theme.btn_bg}}
            />
            <Button
              text="Yes, Log out"
              onPress={() => {
                setLogoutVisible(false);
                navigation
                  .getParent()
                  ?.getParent<NativeStackNavigationProp<any>>()
                  ?.navigate('Auth');
              }}
              style={[styles.modalBtn, {backgroundColor: '#EF4444'}]}
            />
          </View>
        </View>
      </AppModal>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: getFontSize(64),
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: getFontSize(32),
    paddingHorizontal: getFontSize(20),
  },
  avatar: {
    width: getFontSize(90),
    height: getFontSize(90),
    borderRadius: getFontSize(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getFontSize(14),
  },
  avatarInitials: {
    fontSize: getFontSize(30),
    fontWeight: '700',
  },
  name: {
    fontSize: getFontSize(22),
    fontWeight: '700',
    marginBottom: getFontSize(4),
  },
  subtitle: {
    fontSize: getFontSize(14),
    marginBottom: getFontSize(16),
  },
  editBtn: {
    paddingHorizontal: getFontSize(28),
    paddingVertical: getFontSize(10),
    borderRadius: getFontSize(24),
    borderWidth: 1.5,
  },
  editBtnText: {
    fontSize: getFontSize(14),
    fontWeight: '600',
  },
  settingsList: {
    paddingHorizontal: getFontSize(20),
  },
  modalCard: {
    borderRadius: getFontSize(20),
    padding: getFontSize(28),
    width: '85%',
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: getFontSize(20),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: getFontSize(10),
  },
  modalBody: {
    fontSize: getFontSize(15),
    textAlign: 'center',
    marginBottom: getFontSize(28),
  },
  modalActions: {
    flexDirection: 'row',
    gap: getFontSize(12),
  },
  modalBtn: {
    flex: 1,
    borderRadius: getFontSize(30),
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    borderWidth: getFontSize(1.5),
  },
});

export default Profile;
