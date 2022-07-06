import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const Resources =() =>{
  const [keycloak, setKeycloak] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(()=>{
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      setKeycloak(keycloak)
      setAuthenticated(authenticated)
    })
  }, [])

  if (keycloak) {
    if (authenticated) return (
      <div >
        <p style={{color:'green'}}>This is a Keycloak-secured component of your application. You shouldn't be able
          to see this unless you've authenticated with Keycloak.</p>
      </div>
    ); 
    else return (<div style={{color:'red'}}>Unable to authenticate!</div>)
  }

  return(
    <>
      <div style={{color:'blue'}}>Initializing Keycloak...</div>
    </>
  )
}
export default Resources