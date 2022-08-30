import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import MapView, {Circle, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
export function MapScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.7309123,
          longitude: 51.4012902,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 35.7309123, longitude: 51.4012902}}
          title="تهران"
        />
        <Circle
          center={{latitude: 35.7309123, longitude: 51.4012902}}
          radius={1000}></Circle>
      </MapView>
    </View>
  );
}
