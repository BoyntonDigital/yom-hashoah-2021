import React from 'react';

import GlobalStyles from '../../src/styles/GlobalStyles';

const GlobalStyleDecorator = storyFn => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);

export default GlobalStyleDecorator;
