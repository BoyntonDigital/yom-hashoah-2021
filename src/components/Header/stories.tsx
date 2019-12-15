import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from './'

storiesOf('Header', module)
  .add('Main', () => <Header />)
  .add('Another Story', () => <Header />)

