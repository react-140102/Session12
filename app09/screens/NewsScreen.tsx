import React from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';

export function NewsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/sample.gif')}></Image>
    </View>
  );
}
