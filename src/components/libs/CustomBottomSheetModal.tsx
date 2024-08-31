import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {useMemo, forwardRef} from 'react';
import {StyleSheet} from 'react-native';
import {getFontSize, globalStyle, paddingSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import CustomBackdrop from './CustomBackDrop';

interface CustomBottomSheetModalProps {
  snapPoint?: string[];
  children: React.ReactNode;
}

const CustomBottomSheetModal = forwardRef<
  BottomSheetModal,
  CustomBottomSheetModalProps
>(({snapPoint = ['25%', '50%'], children}, ref) => {
  const theme = useCareaTheme();
  const snapPoints = useMemo(() => snapPoint, [snapPoint]);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      style={{
        backgroundColor: theme.bg_1,
        ...styles.container,
      }}
      backdropComponent={CustomBackdrop}>
      <BottomSheetView style={globalStyle.container}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: getFontSize(35),
    borderTopEndRadius: getFontSize(35),
    overflow: 'hidden',
    elevation: 5,
    paddingHorizontal: paddingSizes.large,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CustomBottomSheetModal;
