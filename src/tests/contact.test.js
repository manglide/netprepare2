import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Contact from '../components/Contact'

let container = null;
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null
})

it('renders contact details well', () => {
  act(() => {
    render(<Contact />, container)
  });
  expect(container.textContent).toBe("reach us on adeyemisalau@gmail.com")
})
