import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Api from '../components/Api'

let container = null;
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null
})

it('fetches feed', async () => {
  const APIFEED = {
    name: 'yemi'
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(APIFEED)
    })
  );
  await act( async () => {
    render(<Api />, container);
  });
  expect(container.querySelector("span").textContent).toBe(APIFEED.name)
  global.fetch.mockRestore();
})
