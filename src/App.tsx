import React from 'react'
import { Home } from '@/components'
import { GlobalStyle } from './style'

const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>
)

export default App
