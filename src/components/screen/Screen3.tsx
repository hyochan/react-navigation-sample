import type { ReactElement } from 'react';
import React from 'react';

import type { DefaultNavigationProps } from '../../types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: brown;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: blue;
`;

interface Props {
  navigation: DefaultNavigationProps<'default'>;
}

function Page(): ReactElement {
  return (
    <Container>
      <StyledText testID="myText">Screen 3</StyledText>
    </Container>
  );
}

export default Page;
