import React, {useEffect} from 'react';

import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {DrugCategoryScreen} from './screens/DrugCategoryScreen';
import {DrugScreen} from './screens/DrugScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DrugCategory" component={DrugCategoryScreen} />
        <Stack.Screen name="Drug" component={DrugScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
