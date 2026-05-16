import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import SettingsRow from '../../../components/ui/SettingsRow';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_NOTIFICATION_PREFS, NotificationPrefs} from './profileMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const NOTIFICATION_LABELS: {key: keyof NotificationPrefs; label: string}[] = [
  {key: 'general', label: 'General Notification'},
  {key: 'sound', label: 'Sound'},
  {key: 'vibrate', label: 'Vibrate'},
  {key: 'specialOffers', label: 'Special Offers'},
  {key: 'promoAndDiscount', label: 'Promo & Discount'},
  {key: 'payment', label: 'Payment'},
  {key: 'appUpdates', label: 'App Updates'},
  {key: 'newService', label: 'New Service Available'},
  {key: 'newTips', label: 'New Tips Available'},
];

const NotificationSettings = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [prefs, setPrefs] = useState<NotificationPrefs>(
    MOCK_NOTIFICATION_PREFS,
  );

  const toggle = (key: keyof NotificationPrefs) =>
    setPrefs(prev => ({...prev, [key]: !prev[key]}));

  return (
    <SafeInset>
      <Topbar
        text="Notification"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        {NOTIFICATION_LABELS.map(({key, label}) => (
          <SettingsRow
            key={key}
            label={label}
            rightElement="toggle"
            active={prefs[key]}
            onToggle={() => toggle(key)}
          />
        ))}
      </ScrollView>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});

export default NotificationSettings;
