import React, { useContext } from 'react'
import { KeycloackContext } from '../KeycloackContext'

const Header = () => {
    const { logout } = useContext(KeycloackContext)

    return (
            <button  onClick={() => logout()} >
                LogOut
            </button>
    )
}

export default Header