import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import colors from '../../Utils/colors';
import {getFontSize, HP, WP} from '../../Utils/Responsive';
import AppText from '../AppText';

const AppButton = ({
  label,
  labelColor = 'white',
  height = 1,
  bgcolor = colors.secondary,
  width = 1,
  fontFamily = 'roboto',
  labelSize = 2.8,
  bold,
  borderRadius = 0,
  marginVertical = 0,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgcolor,
          paddingVertical: HP(height),
          paddingHorizontal: WP(width),
          borderRadius: HP(borderRadius),
          marginVertical: HP(marginVertical),
        },
      ]}>
      {children}
      <AppText
        style={{
          color: labelColor,
          fontSize: getFontSize(labelSize),
          fontWeight: bold && 'bold',
          fontFamily: fontFamily,
        }}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WP(3),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default AppButton;
