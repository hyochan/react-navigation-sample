import { DefaultNavigationProps, User } from '../../types';

import Button from '../shared/Button';
import { IC_MASK } from '../../utils/Icons';
import React from 'react';
import { View } from 'react-native';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '../../providers/ThemeProvider';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }): string => theme.fontColor};
`;

interface Props {
  navigation: DefaultNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  const { changeThemeType } = useThemeContext();

  return (
    <Container>
      <ButtonWrapper>
        <View style={{ marginTop: 8 }} />
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
