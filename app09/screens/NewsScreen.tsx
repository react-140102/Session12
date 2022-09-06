import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Button} from 'react-native-paper';

export function NewsScreen({route, navigation}: any) {
  const payment = () => {
    Linking.openURL('https://192.168.92.1:44364/PaymentGateway/send/id=100');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/sample.gif')}></Image>
      <Button onPress={payment}>Pay</Button>
      {route && route.params && <Text>{route.params.id}</Text>}
    </View>
  );
}
