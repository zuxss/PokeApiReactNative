import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MyDrawer from './src/navigator/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <MyDrawer />
    </NavigationContainer>
  );
}
