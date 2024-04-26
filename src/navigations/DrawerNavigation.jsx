import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {ContactStackNavigator} from './StackNavigation';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="ContactUs" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
