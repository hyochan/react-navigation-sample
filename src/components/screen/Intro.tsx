import Button from '../shared/Button';
import type {DefaultNavigationProps} from '../../types';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({theme}): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

interface Props {
  navigation: DefaultNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  return (
    <Container>
      <ButtonWrapper>
        <View style={{marginTop: 8}} />
        <Button
          testID="btnStack"
          style={{
            marginBottom: 8,
          }}
          onClick={(): void => props.navigation.navigate('StackNavigator')}
          text="Stack Navigator"
        />
        <Button
          testID="btnDrawer"
          style={{
            marginBottom: 8,
          }}
          onClick={(): void => props.navigation.navigate('DrawerNavigator')}
          text="Drawer Navigator"
        />
        <Button
          testID="btnTabs"
          style={{
            marginBottom: 8,
          }}
          onClick={(): void => props.navigation.navigate('BottomTabNavigator')}
          text="BottomTab Navigator"
        />
        <Button
          testID="btnTabs"
          style={{
            marginBottom: 8,
          }}
          onClick={(): void =>
            props.navigation.navigate('MaterialTopTabNavigator')
          }
          text="MaterialTopTab Navigator"
        />
        <Button
          testID="btnTabs"
          style={{
            marginBottom: 8,
          }}
          onClick={(): void =>
            props.navigation.navigate('MaterialBottomTabNavigator')
          }
          text="MaterialBottomTab Navigator"
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
