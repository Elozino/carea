import React from 'react';
import ZeegoCall from '../../../components/libs/zeego/ZeegoCall';
import useHideBottomBar from '../../../hooks/useHideBottomTab';

const Call = () => {
  useHideBottomBar();
  return <ZeegoCall />;
};

export default Call;
