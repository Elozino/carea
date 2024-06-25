import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

const useHideBottomBar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);
};

export default useHideBottomBar;
