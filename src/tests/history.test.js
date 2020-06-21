import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import History from '../components/History'


let container = null;
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it('renders history well', () => {
  act(() => {
    render(<History />, container);
  })
  expect(container.querySelector("h2").textContent).toBe("The story of Nigeria");
})
