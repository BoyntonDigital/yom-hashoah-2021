import React from 'react';

import { GlobalStyle } from '../../src/styles/globalStyle';

export const GlobalStyleDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
