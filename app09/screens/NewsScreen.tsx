import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Button} from 'react-native-paper';

export function NewsScreen({navigation}: any) {
  const payment = () => {
    Linking.openURL('http://www.mycompany.com/PaymentGateway/send/id=100');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/sample.gif')}></Image>
      <Button onPress={payment}>Pay</Button>
    </View>
  );
}
