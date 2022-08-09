import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {DrugCategoryScreen} from './screens/DrugCategoryScreen';
import {DrugScreen} from './screens/DrugScreen';
import {DrugDetailScreen} from './screens/DrugDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DrugCategory" component={DrugCategoryScreen} />
          <Stack.Screen name="Drug" component={DrugScreen} />
          <Stack.Screen name="DrugDetail" component={DrugDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
