import 'react-native';

import React, { ReactElement } from 'react';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import { NavigationContainer } from '@react-navigation/native';
import SwitchNavigator from '../SwitchNavigator';
import { cleanup } from '@testing-library/react-native';
import { enableScreens } from 'react-native-screens';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;

describe('[Switch] navigator', () => {
  beforeEach(() => {
    enableScreens();
    props = createTestProps();
    component = createTestElement(<SwitchNavigator {...props} />);
  });

  it('should renders without crashing', () => {
    jest.useFakeTimers();
    const rendered = renderer.create(component).toJSON();
    jest.runAllTimers();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
