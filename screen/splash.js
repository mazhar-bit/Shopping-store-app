import React from 'react';
import {View, ImageBackground, Text, Image} from 'react-native';
import {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomApp'}],
        }),
      );
    }, 2000);
  }, []);
  return (
    <View style={{backgroundColor: 'white', height: '100%', 
    alignItems:'center', alignContent:'center'}}>
      <FastImage
        style={{
          width: '80%',
          height: '55%',
          alignSelf: 'center',
          margin: 10,
          marginTop:'30%',
        }}
        source={require('../asset/img.png')}
      />
        <Text style={{alignSelf: 'center', fontSize: 30}}>Store App</Text>

    </View>
  );
};
export default Splash;
