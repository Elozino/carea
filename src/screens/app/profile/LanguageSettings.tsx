import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_LANGUAGES, Language} from './profileMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const LanguageSettings = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  const [languages, setLanguages] = useState<Language[]>(MOCK_LANGUAGES);
  const currentSelected = MOCK_LANGUAGES.find(l => l.selected)?.id ?? 'ro';

  const select = (id: string) =>
    setLanguages(prev => prev.map(l => ({...l, selected: l.id === id})));

  const selectedId = languages.find(l => l.selected)?.id;
  const changed = selectedId !== currentSelected;

  return (
    <SafeInset>
      <Topbar
        text="Language"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <FlatList
        data={languages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            style={[styles.row, {borderBottomColor: theme.bg_2}]}
            onPress={() => select(item.id)}>
            <Text style={[styles.label, {color: theme.text_1}]}>
              {item.label}
            </Text>
            <View
              style={[
                styles.radio,
                {
                  borderColor: item.selected ? theme.btn_bg : theme.gray,
                  backgroundColor: item.selected ? theme.btn_bg : 'transparent',
                },
              ]}
            />
          </Pressable>
        )}
        contentContainerStyle={[styles.list, {backgroundColor: theme.bg_1}]}
        ListFooterComponent={
          <View style={styles.btnWrap}>
            <Button
              text="Save"
              disabled={!changed}
              onPress={() => navigation.goBack()}
              style={styles.btn}
            />
          </View>
        }
      />
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    flex: 1,
    fontSize: 15,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
  },
  btnWrap: {
    marginTop: 32,
  },
  btn: {
    borderRadius: 30,
  },
});

export default LanguageSettings;
