import React from 'react'
import { GlobalStyle } from './style'
import { Home } from '@/components'

const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>
)

export default App
