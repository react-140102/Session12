import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>صفحه اصلی</Text>
      <Button onPress={() => navigation.navigate('DrugCategory')}>
        دسته بندی دارو ها
      </Button>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
}
