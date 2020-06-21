import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Login from '../components/Login'

let container = null
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it('fetches data and logs in', async () => {
  const loginData = {
    username: 'yemi',
    password: 'pass'
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(loginData)
    })
  );
  await act( async () => {
    render(<Login user={loginData} />, container);
  });
  expect(container.querySelector("div").textContent).toBe(loginData.username);
  expect(container.querySelector("span").textContent).toBe(loginData.password);
  expect(container.querySelector("h6").textContent).toBe("jsdheuihiedbwdbiwdiwdbwiubdwbdwdwdwndwdibde");

  global.fetch.mockRestore();


})
