import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import colors from '../../Utils/colors';
import {getFontSize, HP, WP} from '../../Utils/Responsive';
import AppText from '../AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const size = WP(10);

const IconBadge = ({num}) => {
  if (!num) return null;
  return (
    <View style={styles.badgeContainer}>
      <AppText adjustsFontSizeToFit style={styles.badgeText}>
        {num}
      </AppText>
    </View>
  );
};

const AppHeader = ({
  icon1 = true,
  iconRightNameMatCom,
  iconRightNameAntDes,
  iconRightBadgeTxt,
  iconLeftName = 'chevron-left',
  onPressRight,
  onPressLeft,
  label,
  outerStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, outerStyle]}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={onPressLeft ? onPressLeft : () => navigation.goBack()}>
        {icon1 && <MaterialCommunityIcons name={iconLeftName} size={size} />}
      </TouchableOpacity>
      <View style={styles.txtWrapper}>
        {label && <AppText style={styles.txt}>{label}</AppText>}
      </View>
      <TouchableOpacity style={styles.iconWrapper} onPress={onPressRight}>
        {iconRightNameMatCom && (
          <>
            <MaterialCommunityIcons name={iconRightNameMatCom} size={size} />
            <IconBadge num={iconRightBadgeTxt} />
          </>
        )}
        {iconRightNameAntDes && (
          <>
            <Ionicons name={iconRightNameAntDes} size={size} />
            <IconBadge num={iconRightBadgeTxt} />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal:8,
    height: size,
  },
  txt: {
    fontSize: size - 15,
    textAlign: 'center',
  },
  txtWrapper: {flex: 1},
  iconWrapper: {width: size},
  badgeContainer: {
    backgroundColor: colors.secondary,
    height: 15,
    width: 15,
    borderRadius: 15,
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  badgeText: {color: 'white', fontFamily: 'poppins-semibold'},
});
export default AppHeader;
