import { useKeycloak } from "@react-keycloak/web";
import Test from "./Test";

function App() {
  const { keycloak, initialized } = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>React + Keycloak Demo</h1>

      <p>Logged in: {keycloak.authenticated ? "Yes" : "No"}</p>

      {keycloak.authenticated && (
        <>
          <p>Username: {keycloak.tokenParsed?.preferred_username}</p>

          <p>Email: {keycloak.tokenParsed?.email}</p>

          <button onClick={() => keycloak.logout()}>Logout</button>
        </>
      )}

      <Test />
      {!keycloak.authenticated && (
        <button onClick={() => keycloak.login()}>Login</button>
      )}
    </div>
  );
}

export default App;
