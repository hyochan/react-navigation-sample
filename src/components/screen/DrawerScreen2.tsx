import React, { ReactElement } from 'react';

import Button from '../shared/Button';
import { DefaultDrawerNavigationProps } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

const Container = styled.View`
  flex: 1;
  background-color: orange;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: blue;
  margin-bottom: 8px;
`;

function Page(): ReactElement {
  const navigation = useNavigation() as DefaultDrawerNavigationProps<'default'>;
  return (
    <Container>
      <StyledText testID="myText">Screen 2</StyledText>
      <Button
        testID="btn3"
        onClick={(): void => navigation.openDrawer()}
        text="Open drawer"
      />
    </Container>
  );
}

export default Page;
