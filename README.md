# Boynton Gatsby Boilerplate

## Tech Stack

* Component Driven Design - [Storybook](https://storybook.js.org/docs/formats/storiesof-api/)
* Framework - [Gatsby](https://www.gatsbyjs.org/docs/)
* Framework - [React](https://reactjs.org/docs/getting-started.html)
* Language - [TypeScript](https://www.typescriptlang.org/docs/home.html)
* Lintings - [EsLint](https://eslint.org/docs/user-guide/getting-started)
* Styling - [styled-components](https://www.styled-components.com/docs/basics)
* Testing - [Jest](https://jestjs.io/docs/en/getting-started.html)

## File Structure

### Components
``` js
.
+-- _components
|   +-- myComponent
  |   +-- index.tsx // Component JSX and Logic
  |   +-- stories.tsx // Stories for storybook
  |   +-- styles.tsx // All styled-components
  |   +-- test.tsx // Jest tests for component
|   +-- myOtherComponent
  |   +-- index.tsx
  |   +-- stories.tsx
  |   +-- styles.tsx
  |   +-- test.tsx
```

### Pages
All pages must be at the root of the directory. The title of the file will be the title of the page (i.e. `home.tsx` will become `localhost:8000/home`)

``` js
.
+-- _pages
|   +-- index.tsx // localhost:8000/
|   +-- about.tsx // localhost:8000/about
|   +-- careers.tsx // localhost:8000/careers
```
## Styling
All styling is done in the style of `CSS-in-JS` by using `styled-components`. These should live in the component's `styles.ts` file for each component.

Example:

``` js
// styles.tsx

import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  height: 200px;
  background-color: blue;
`

export const Heading = styled.h2`
  font-size: 36px;
  color: black
`

// index.tsx
import React from 'react'
import { Container, Heading } from './styles'

export const MyComponent: React.FC = () => {
  return (
    <Container>
      <Heading>Hello World</Heading>
    </Container>
  )
}
```

All components' most outer element must be called `Container` for consistency.


## Storybook

Storybook works by running `npm run storybook`. It then gathers all the stories from the `stories.tsx` files in each component folder. To start developing a story, add that file and then a basic setup with your component.

Example:

``` js
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from './'

storiesOf('Header', module)
  .add('Main', () => <Header />)
  .add('Another Story', () => <Header />)

```

Here we have the main story for the Header component. It has two sub-stories `Main` and `Another Story`. `module` must be provided as the second argument to `storiesOf`.

For more advanced usage, refer to the docs linked above.

## Development Workflow

* Create New Branch
* Setup basic files
* Run storybook
* Refer to storybook while developing component
* add tests
* commit
* Push branch to repo
* Open pull request
* Ping dev

