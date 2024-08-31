/* eslint-disable react-native/no-inline-styles */
import {Modal, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

const AppModal = ({
  visible,
  animationType,
  transparent = true,
  onRequestClose,
  statusBarTranslucent = true,
  children,
  position,
}: {
  visible: boolean;
  animationType: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  onRequestClose?: () => void;
  statusBarTranslucent: boolean;
  position: 'top' | 'center' | 'bottom';
} & PropsWithChildren) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      onRequestClose={onRequestClose}
      statusBarTranslucent={statusBarTranslucent}>
      <View
        style={{
          flex: 1,
          justifyContent:
            position === 'top'
              ? 'flex-start'
              : position === 'center'
              ? 'center'
              : position === 'bottom'
              ? 'flex-end'
              : 'flex-start',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        {children}
      </View>
    </Modal>
  );
};

export default AppModal;
