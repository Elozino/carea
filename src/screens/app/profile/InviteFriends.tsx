import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import AppTextInput from '../../../components/ui/AppTextInput';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_CONTACTS, Contact} from './profileMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const InviteFriends = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [query, setQuery] = useState('');
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleInvite = (id: string) =>
    setContacts(prev =>
      prev.map(c => (c.id === id ? {...c, invited: !c.invited} : c)),
    );

  return (
    <SafeInset>
      <Topbar
        text="Invite Friends"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <View style={styles.searchWrap}>
        <AppTextInput
          label="Search contacts"
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: Contact}) => (
          <View style={[styles.row, {borderBottomColor: theme.bg_2}]}>
            <View style={[styles.avatar, {backgroundColor: theme.btn_bg}]}>
              <Text style={[styles.initials, {color: theme.btn_text}]}>
                {item.initials}
              </Text>
            </View>
            <Text style={[styles.name, {color: theme.text_1}]}>
              {item.name}
            </Text>
            <Pressable
              style={[
                styles.inviteBtn,
                {
                  backgroundColor: item.invited ? theme.bg_2 : theme.btn_bg,
                  borderColor: item.invited ? theme.gray : theme.btn_bg,
                },
              ]}
              onPress={() => toggleInvite(item.id)}>
              <Text
                style={[
                  styles.inviteText,
                  {color: item.invited ? theme.text_3 : theme.btn_text},
                ]}>
                {item.invited ? 'Invited' : 'Invite'}
              </Text>
            </Pressable>
          </View>
        )}
        contentContainerStyle={[styles.list, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}
      />
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  searchWrap: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  initials: {
    fontWeight: '700',
    fontSize: 15,
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  inviteBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  inviteText: {
    fontSize: 13,
    fontWeight: '600',
  },
});

export default InviteFriends;
