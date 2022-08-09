import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrugCategoryScreen} from './DrugCategoryScreen';
import {DrugDetailScreen} from './DrugDetailScreen';
import {DrugScreen} from './DrugScreen';
import {HomeScreen} from './HomeScreen';

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DrugCategory" component={DrugCategoryScreen} />
      <Stack.Screen name="Drug" component={DrugScreen} />
      <Stack.Screen name="DrugDetail" component={DrugDetailScreen} />
    </Stack.Navigator>
  );
};
