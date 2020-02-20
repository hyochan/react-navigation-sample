import { MaterialBottomTabNavigationProp, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { ReactElement } from 'react';

import { IC_MASK } from '../../utils/Icons';
import { Image } from 'react-native';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';

export type MaterialBottomTabParamList = {
  default: undefined;
};

export type MaterialBottomTabNavigationProps<
  T extends keyof MaterialBottomTabParamList = 'default'
> = MaterialBottomTabNavigationProp<MaterialBottomTabParamList, T>;

const Tab = createMaterialBottomTabNavigator<MaterialBottomTabParamList>();

const TabBarIcon = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 24 : 18,
        height: focused ? 24 : 18,
      }}
      source={IC_MASK}
    />
  );
};

function Navigator(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon(focused),
      }}
    >
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: 'Screen1',
          tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon(focused),
        }}
      />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
}

export default Navigator;
