import 'react-native';

import type { ReactElement } from 'react';
import React from 'react';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../StackNavigator';
import { cleanup } from '@testing-library/react-native';
import { enableScreens } from 'react-native-screens';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;

describe('[Stack] navigator', () => {
  beforeEach(() => {
    enableScreens();
    props = createTestProps();
    component = createTestElement(
      <NavigationContainer>
        <StackNavigator {...props} />
      </NavigationContainer>,
    );
  });

  it('should renders without crashing', () => {
    jest.useFakeTimers();

    const rendered = renderer.create(component).toJSON();
    jest.runAllTimers();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
