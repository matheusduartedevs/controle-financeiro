import React from 'react'
import GlobalStyle from './styles/global'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <GlobalStyle />
    </>
  )
}

export default App