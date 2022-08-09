import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from './screens/HomeStackScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchScreen} from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="TabHome"
            component={HomeStackScreen}
            options={{
              headerShown: false,
              title: 'خانه',
              tabBarIcon(props) {
                return (
                  <Icon name="home" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="TabSearch"
            component={SearchScreen}
            options={{
              title: 'جستجو',
              tabBarIcon(props) {
                return (
                  <Icon name="magnify" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="TabFav"
            component={SearchScreen}
            options={{
              title: 'علاقه مندی ها',
              tabBarIcon(props) {
                return (
                  <Icon name="heart" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="TabNews"
            component={SearchScreen}
            options={{
              title: 'تازه ها',
              tabBarIcon(props) {
                return (
                  <Icon
                    name="email-newsletter"
                    size={props.size}
                    color={props.color}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
