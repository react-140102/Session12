import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';

export function HomeScreen({navigation}: any) {
  const [location, setLocation] = useState<any>();
  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLocation(info));
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        longitude: {location?.coords?.longitude} - latitude:
        {location?.coords?.latitude}
      </Text>
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
