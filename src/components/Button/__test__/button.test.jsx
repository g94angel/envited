import React from 'react'
import ReactDOM from 'react-dom/client';
import ButtonT from './../ButtonT'
import {render, screen, cleanup} from '@testing-library/react'

afterEach(cleanup)
it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(<ButtonT/>)
})

it('renders button correctly', () => {
  render(<ButtonT label="come to my party" />)
  expect(screen.getByTestId('button')).toHaveTextContent('come to my party')
})


// it('renders button correctly', () => {
//   render(<ButtonT label="save" />)
//   expect(screen.getByTestId('button')).toHaveTextContent('save')
// })