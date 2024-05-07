import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactStackNavigator, MainStackNavigator} from './StackNavigation';
import HomeScreen from '../screens/home/HomeScreen';
import ContactUs from '../screens/contactUs/ContactUs';
import {Image, Text} from 'react-native';
// import homeIcon from '../assets/icons'
import AwesomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Entypo name="home" size={30} color="#ffff" />;
          },
          tabBarLabel: () => {
            return <Text style={{color: 'white'}}>Home</Text>;
          },
        }}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarIcon: () => {
            return (
              <AwesomeIcon name="face-man-profile" size={30} color="#ffff" />
            );
          },
          tabBarLabel: () => {
            return <Text style={{color: 'white'}}>Profile</Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
