import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import api from '../utils/api';
import {Category} from './Category';
import {Drug} from './Drug';

export function DrugDetailScreen({route, navigation}: any) {
  const drug: Drug = route.params;
  useEffect(() => {
    navigation.setOptions({title: drug.name});
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail {drug.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
