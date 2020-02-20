import React, { ReactElement } from 'react';

import { DefaultNavigationProps } from '../../types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: white;
`;

interface Props {
  navigation: DefaultNavigationProps<'default'>;
}

function Page(): ReactElement {
  return (
    <Container>
      <StyledText testID="myText">Screen 2</StyledText>
    </Container>
  );
}

export default Page;
