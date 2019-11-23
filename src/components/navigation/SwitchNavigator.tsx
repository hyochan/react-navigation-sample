import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import Intro from '../screen/Intro';
import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import { NavigationNativeContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useThemeContext } from '../../providers/ThemeProvider';

const Stack = createNativeStackNavigator();

function RootNavigator(): React.ReactElement {
  const { theme } = useThemeContext();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="MaterialTopTabNavigator"
          component={MaterialTopTabNavigator}
        />
        <Stack.Screen
          name="MaterialBottomTabNavigator"
          component={MaterialBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator;
