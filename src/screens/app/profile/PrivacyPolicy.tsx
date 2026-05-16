import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';
import {PRIVACY_POLICY_SECTIONS} from './profileMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const PrivacyPolicy = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [expanded, setExpanded] = useState<string[]>(['1']);

  const toggle = (id: string) =>
    setExpanded(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
    );

  return (
    <SafeInset>
      <Topbar
        text="Privacy Policy"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}>
        {PRIVACY_POLICY_SECTIONS.map(section => {
          const isOpen = expanded.includes(section.id);
          return (
            <View key={section.id} style={styles.section}>
              <Pressable
                style={[styles.sectionHeader, {borderBottomColor: theme.bg_2}]}
                onPress={() => toggle(section.id)}>
                <Text style={[styles.sectionTitle, {color: theme.text_1}]}>
                  {section.title}
                </Text>
                <Text style={[styles.chevron, {color: theme.text_3}]}>
                  {isOpen ? '▲' : '▼'}
                </Text>
              </Pressable>
              {isOpen && (
                <Text style={[styles.body, {color: theme.text_3}]}>
                  {section.body}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
    paddingRight: 12,
  },
  chevron: {
    fontSize: 12,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    paddingVertical: 12,
  },
});

export default PrivacyPolicy;
