import React from 'react'
import { findByTestId, findByText, render } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import App from './app'

function mockFetch(data: never[]) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data
    })
  })
}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([])
  })

  it('should render successfully', async () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )

    // @ts-ignore
    const element = await findByTestId(baseElement, 'app-container')
    expect(element).toBeTruthy()
  })

  it('should have a greeting as the title', async () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )

    // @ts-ignore
    expect(await findByText(baseElement, 'Scalable Typescript React Nest Storybook Cypress Jest ESLint computation Cache Build within NX')).toBeTruthy()
  })
})
