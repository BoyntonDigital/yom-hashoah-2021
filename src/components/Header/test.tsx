import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  test('should render', () => {
    const component = render(<Header />)
    expect(component).toBeDefined()
  })
})