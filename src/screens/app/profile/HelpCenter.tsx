import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import AppTextInput from '../../../components/ui/AppTextInput';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_FAQ, FaqItem} from './profileMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;
type FaqCategory = 'Account' | 'Report' | 'Others';

const TABS: FaqCategory[] = ['Account', 'Report', 'Others'];

const HelpCenter = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [activeTab, setActiveTab] = useState<FaqCategory>('Account');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const items = MOCK_FAQ.filter(
    f =>
      f.category === activeTab &&
      f.question.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleFaq = (id: string) =>
    setExpanded(prev => (prev === id ? null : id));
  const activeTabStyle = {
    borderBottomColor: theme.btn_bg,
  };

  return (
    <SafeInset>
      <Topbar
        text="Help Center"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <View style={styles.searchWrap}>
        <AppTextInput
          label="Search help articles"
          value={query}
          onChangeText={setQuery}
        />
      </View>
      {/* Tabs */}
      <View style={[styles.tabs, {borderBottomColor: theme.bg_2}]}>
        {TABS.map(tab => (
          <Pressable
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
              activeTab === tab && activeTabStyle,
            ]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                {color: activeTab === tab ? theme.btn_bg : theme.text_3},
              ]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: FaqItem}) => (
          <Pressable
            style={[styles.faqRow, {borderBottomColor: theme.bg_2}]}
            onPress={() => toggleFaq(item.id)}>
            <Text style={[styles.question, {color: theme.text_1}]}>
              {item.question}
            </Text>
            <Text style={[styles.chevron, {color: theme.text_3}]}>
              {expanded === item.id ? '▲' : '▼'}
            </Text>
            {expanded === item.id && (
              <Text style={[styles.answer, {color: theme.text_3}]}>
                {item.answer}
              </Text>
            )}
          </Pressable>
        )}
        contentContainerStyle={[styles.list, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.btnWrap}>
            <Button
              text="Contact Us"
              onPress={() => navigation.navigate(ROUTES.HELP_CENTER_CHANNELS)}
              style={styles.btn}
            />
          </View>
        }
      />
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  searchWrap: {
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  faqRow: {
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  question: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  chevron: {
    fontSize: 12,
    marginTop: 2,
  },
  answer: {
    width: '100%',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
  btnWrap: {
    marginTop: 32,
  },
  btn: {
    borderRadius: 30,
  },
});

export default HelpCenter;
