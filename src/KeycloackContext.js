import React, { createContext, useState, useEffect } from 'react'
import Keycloak from 'keycloak-js'
const KeycloackContext = createContext()

const KeycloackContextProvider = (props) => {
    const [ keycloackValue, setKeycloackValue ] = useState(null)
    const [ authenticated, setAuthenticated ] = useState(false)

    const setKeycloack = () => {
        const keycloak = Keycloak({
            realm: "test-admin",
            url: "http://localhost:8080/auth/",
            clientId: "test-react-keycloak",
        })

        keycloak.init({
            onLoad: 'login-required', 
        }).then(authenticated => {
            setKeycloackValue(keycloak)
            setAuthenticated(authenticated)
        })
    }

    const logout = () => {
        setKeycloack(null)
        setAuthenticated(false)
        keycloackValue.logout()
    }

    useEffect(() => {
        setKeycloack()
    }, [])

    return (
        <KeycloackContext.Provider
            value={{
                keycloackValue,
                authenticated,
                logout
            }}
        >
            {props['children']}
        </KeycloackContext.Provider>
    )
}

export { KeycloackContextProvider, KeycloackContext }