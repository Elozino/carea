import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ROUTES} from '../constants/enums';
import {globalStyle} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import {hasStoredAuthSession} from '../libs/apiClient';
import {AuthStackParams} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';

type AuthStackRouteName = keyof AuthStackParams;

const RootStackNavigator = () => {
  const theme = useCareaTheme();
  const [initialRouteName, setInitialRouteName] =
    React.useState<AuthStackRouteName | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    const bootstrapRoute = async () => {
      const hasSession = await hasStoredAuthSession();

      if (!isMounted) {
        return;
      }

      setInitialRouteName(hasSession ? ROUTES.APP : ROUTES.WELCOME);
    };

    bootstrapRoute();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View
      style={[globalStyle.container, {backgroundColor: theme.background.app}]}>
      {initialRouteName ? (
        <AuthStackNavigator initialRouteName={initialRouteName} />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="small"
            color={theme.action.primaryBackground}
          />
        </View>
      )}
    </View>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
