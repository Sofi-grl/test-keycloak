import React, { useContext } from 'react'
import Header from './components/Header'
import { KeycloackContext } from './KeycloackContext'


const App = () => {
    const { keycloackValue, authenticated } = useContext(KeycloackContext)

    return (
        (keycloackValue && authenticated) &&  <Header/>)
}

export default App