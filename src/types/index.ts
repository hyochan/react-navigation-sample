import { StyleProp, TextStyle } from 'react-native';

import { DefaultTheme } from 'styled-components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { SFC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

type StackParamList = {
  default: undefined;
  Intro: { userId: string };
  Temp: undefined;
  StackNavigator: undefined;
  DrawerNavigator: undefined;
  BottomTabNavigator: undefined;
  MaterialBottomTabNavigator: undefined;
  MaterialTopTabNavigator: undefined;
};

export type DefaultNavigationProps<
  T extends keyof StackParamList
> = StackNavigationProp<StackParamList, T>;

export type DefaultDrawerNavigationProps<
  T extends keyof StackParamList
> = DrawerNavigationProp<StackParamList, T>;

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
