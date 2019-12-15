import { addDecorator, configure } from '@storybook/react';

const req = require.context('../src', true, /stories.tsx$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(GlobalStyleDecorator);

configure(loadStories, module);
