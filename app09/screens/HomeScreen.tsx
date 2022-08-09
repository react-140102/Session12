import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('DrugCategory')}>
        دارو های شیمیایی
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('DrugCategory')}>
        گیاهان دارویی
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('DrugCategory')}>
        دارو های شیمیایی
      </Button>
    </View>
  );
}
