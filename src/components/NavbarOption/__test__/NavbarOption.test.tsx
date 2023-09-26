import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'

import store from 'src/redux/store.ts'

import NavbarOption from '../NavbarOption.tsx'

const label = 'About'
const route = '/about'

describe('Navbar tests', () => {
  it('Make sure Navbar renders label and route', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavbarOption label={label} route={route} />
        </BrowserRouter>
      </Provider>
    )

    const navOption = screen.getByRole('link', { name: 'About' })
    expect(navOption).toBeInTheDocument()
    expect(navOption).toHaveTextContent('About')
    expect(navOption).toHaveAttribute('href', '/about')
  })

  it('Navbar renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <NavbarOption label={label} route={route} />
          </BrowserRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})