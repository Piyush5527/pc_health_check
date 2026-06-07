import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react'
import { Button } from './components/ui/button';

const Test = () => {
    const { keycloak, initialized } = useKeycloak();
    useEffect(() => {
        const getData = async () => {
          try {
            // if (keycloak && keycloak.authenticated) {
            // await keycloak?.updateToken();
            // if (initialized) {
              console.log("first", keycloak.token);
              const req = await fetch("http://localhost:8080", {
                headers: {
                  Authorization: `Bearer ${keycloak.token}`,
                },
              });
            // }
            // setCars(await req.json());
            // }
          } catch (e) {
            console.log("ERROR", e);
          }
        };
        getData();
      }, [initialized, keycloak]);
  return (
    <Button>
        Hllo click me
    </Button>
  )
}

export default Test