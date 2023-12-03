import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { selectMode } from 'src/shared/redux/settingsSlice/selectors'
import { useAppSelector } from 'src/shared/redux/store'

import Main from 'src/features/Main'
import Landing from 'src/features/Landing'
import Products from 'src/features/Products'

import GlobalStyle from './shared/lib/globalStyles'
import theme from './shared/lib/theme'

function App() {
  const mode = useAppSelector(selectMode)

  return (
    <ThemeProvider theme={theme[mode]}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Landing />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
