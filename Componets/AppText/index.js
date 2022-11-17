import React from 'react';
import {Text, StyleSheet} from 'react-native';

const AppText = ({style, children, ...otherprops}) => {
  return (
    <Text style={[styles.container, style]} {...otherprops}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {fontFamily: 'roboto'},
});
export default AppText;
