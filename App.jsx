/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import {mainBgColor} from './src/assets/Colors/colors';

import DrawerNavigation from './src/navigations/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigations/TabNavigation';
import { MainStackNavigator } from './src/navigations/StackNavigation';

function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: mainBgColor}}>
        {/* <KeyboardAvoidingView style={{flex: 1}}> */}
        <StatusBar backgroundColor={mainBgColor} />
        <NavigationContainer>
          {/* <BottomTabNavigator /> */}
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
