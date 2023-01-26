import type {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import React from 'react';
import type {ReactElement} from 'react';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export type MaterialTopTabParamList = {
  default: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

export type MaterialTopTabNavigationProps<
  T extends keyof MaterialTopTabParamList = 'default',
> = MaterialTopTabNavigationProp<MaterialTopTabParamList, T>;

const Tab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

function SwitchNavigator(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'blue'},
      }}>
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{tabBarLabel: 'Custom4'}}
      />
    </Tab.Navigator>
  );
}

export default SwitchNavigator;
