import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Gettime from '../components/Gettime'

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

it('gets the accurate time', async () => {
  const defTime = {
    day: "friday",
    month: "may",
    year: "2020"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(defTime)
    })
  );

  await act( async () => {
    render(<Gettime />, container)
  });
  expect(container.querySelector("h2").textContent).toBe(defTime.day)
  expect(container.querySelector("h3").textContent).toBe(defTime.month)
  expect(container.querySelector("h4").textContent).toBe(defTime.year)

  global.fetch.mockRestore();
})
