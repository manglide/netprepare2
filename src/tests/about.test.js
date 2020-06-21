import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import About from '../components/About'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders well about', () => {
  act(() => {
    render(<About />, container);
  });
  expect(container.textContent).toBe("Were the best logistics company around");
})
