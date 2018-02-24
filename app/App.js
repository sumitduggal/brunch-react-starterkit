import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme';
import Welcome from 'Views/Welcome';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ${key(['backgrounds', 'app'])};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <AppWrapper>
    <Welcome />
  </AppWrapper>
)
