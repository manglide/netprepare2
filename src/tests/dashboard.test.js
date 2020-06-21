import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Dashboard from '../components/Dashboard'

let container = null;
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null;
})

it('renders dashboard well', () => {
  act(() => {
    render(<Dashboard />, container);
  });
  expect(container.textContent).toBe("You're logged in")
})
