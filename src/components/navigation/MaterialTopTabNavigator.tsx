import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { ReactElement } from 'react';

import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';

export type MaterialTopTabParamList = {
  default: undefined;
};

export type MaterialTopTabNavigationProps<
  T extends keyof MaterialTopTabParamList = 'default'
> = MaterialTopTabNavigationProp<MaterialTopTabParamList, T>;

const Tab = createMaterialTopTabNavigator<MaterialTopTabNavigationProps>();

function SwitchNavigator(): ReactElement {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'blue' },
      }}
    >
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{ tabBarLabel: 'Custrom4' }}
      />
    </Tab.Navigator>
  );
}

export default SwitchNavigator;
