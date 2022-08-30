import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from './screens/HomeStackScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchScreen} from './screens/SearchScreen';
import {NewsScreen} from './screens/NewsScreen';
import {MapScreen} from './screens/MapScreen';
import {CameraScreen} from './screens/CameraScreen';

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
            component={MapScreen}
            options={{
              title: 'نقشه',
              tabBarIcon(props) {
                return (
                  <Icon name="map" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="TabCamera"
            component={CameraScreen}
            options={{
              title: 'دوربین',
              tabBarIcon(props) {
                return (
                  <Icon name="camera" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="TabNews"
            component={NewsScreen}
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
