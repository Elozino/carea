import React from 'react';
import {Linking, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import SettingsRow from '../../../components/ui/SettingsRow';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {ProfileStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const CHANNELS = [
  {key: 'cs', label: 'Customer Service', emoji: '🎧'},
  {key: 'whatsapp', label: 'WhatsApp', emoji: '💬'},
  {key: 'website', label: 'Website', emoji: '🌐'},
  {key: 'facebook', label: 'Facebook', emoji: '📘'},
  {key: 'twitter', label: 'Twitter', emoji: '🐦'},
  {key: 'instagram', label: 'Instagram', emoji: '📸'},
];

const HelpCenterChannels = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  const handlePress = (key: string) => {
    if (key === 'cs') {
      navigation.navigate(ROUTES.CUSTOMER_SERVICE_CHAT);
      return;
    }
    Linking.openURL('#').catch(() => {});
  };

  return (
    <SafeInset>
      <Topbar
        text="Help Center"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <View style={styles.content}>
        {CHANNELS.map(ch => (
          <SettingsRow
            key={ch.key}
            label={ch.label}
            onPress={() => handlePress(ch.key)}
          />
        ))}
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

export default HelpCenterChannels;
