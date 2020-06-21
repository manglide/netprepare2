import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Centers from '../components/centers';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("it fetches covid data", async () => {
  const fakeData = {
    reg_fac_name: "LAGOS UNIVERSITY TEACHING HOSPITAL (LUTH) CLINIC",
    street_name: "Idi-Araba  Mushin  Lagos"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Centers />, container);
  });

  expect(container.querySelector("h2").textContent).toBe(fakeData.reg_fac_name);
  expect(container.querySelector("h4").textContent).toBe(fakeData.street_name);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();

});
