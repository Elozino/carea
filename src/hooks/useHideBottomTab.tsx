import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import {Platform} from 'react-native';

const useHideBottomBar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 100 : 70,
          borderTopWidth: 0,
        },
        tabBarVisible: undefined,
      });
  }, [navigation]);
};

export default useHideBottomBar;
