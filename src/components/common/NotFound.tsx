/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {RecordStackIcon} from '../../assets/svg';
import {globalStyle, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

const NotFound = ({text}: {text: string}) => {
  const theme = useCareaTheme();
  return (
    <View style={globalStyle.center}>
      <RecordStackIcon width={200} height={200} />
      <Text
        style={[
          {
            color: theme.text_1,
            fontWeight: 'bold',
            fontSize: textSizes.medium,
          },
        ]}>
        {text ?? 'Not Found'}
      </Text>
    </View>
  );
};

export default NotFound;
