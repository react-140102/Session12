import React from 'react';
import {Button, Text, View} from 'react-native';

export function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>صفحه اصلی</Text>
      <Button
        title="دسته بندی دارو ها"
        onPress={() => navigation.navigate('DrugCategory')}></Button>
    </View>
  );
}
