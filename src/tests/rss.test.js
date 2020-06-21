import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Rss from '../components/Rss'

let container = null;
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null;
})

it('renders with rss data', async () => {
  const rssdata = {
    url: 'https://asknogeria.com.ng.rss'
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(rssdata)
    })
  );
  await act( async () => {
    render(<Rss />, container);
  });
  expect(container.textContent).toBe(rssdata.url);

  global.fetch.mockRestore();
})
