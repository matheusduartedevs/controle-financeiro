import React from 'react'
import GlobalStyle from './styles/global'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import Form from './components/Form/Form'

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>
  )
}

export default App