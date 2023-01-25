import Button from '../shared/Button';
import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: orange;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: blue;
  margin-bottom: 8px;
`;

function Page(): ReactElement {
  return (
    <Container>
      <StyledText testID="myText">Screen 1</StyledText>
      <Button
        testID="btn3"
        // onClick={(): void => navigation.navigate('Screen2')}
        text="Navigate to screen2"
      />
    </Container>
  );
}

export default Page;
