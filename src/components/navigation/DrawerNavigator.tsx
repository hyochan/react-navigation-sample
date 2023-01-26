import type {
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {DrawerItem, createDrawerNavigator} from '@react-navigation/drawer';
import {ScrollView, StyleSheet} from 'react-native';

import DrawerScreen1 from '../screen/DrawerScreen1';
import DrawerScreen2 from '../screen/DrawerScreen2';
import React from 'react';
import type {ReactElement} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';

export type DrawerParamList = {
  default: undefined;
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

export type DrawerNavigationProps<T extends keyof DrawerParamList = 'default'> =
  DrawerNavigationProp<DrawerParamList, T>;

const Drawer = createDrawerNavigator<DrawerParamList>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function CustomDrawerContent({drawerPosition, navigation}: any): ReactElement {
  const insets = useSafeArea();

  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={styles.container}>
      <DrawerItem
        label="Screen1"
        onPress={(): void => {
          navigation.navigate('DrawerScreen1');
        }}
      />
      <DrawerItem
        label="Screen2"
        onPress={(): void => {
          navigation.navigate('DrawerScreen2');
        }}
      />
      <DrawerItem
        label="Close"
        onPress={(): void => {
          navigation.closeDrawer();
        }}
      />
    </ScrollView>
  );
}

function Navigator(): ReactElement {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props: DrawerContentComponentProps): ReactElement => (
        <CustomDrawerContent drawerPosition={undefined} {...props} />
      )}>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
}

export default Navigator;
