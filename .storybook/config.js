import { addDecorator, configure } from '@storybook/react';
import { GlobalStyleDecorator } from './components/GlobalStyleDecorator'

const req = require.context('../src', true, /stories.tsx/);

const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(GlobalStyleDecorator);

configure(loadStories, module);
