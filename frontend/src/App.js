import React from "react";
import { login } from "./utils/near";
function App() {
  const account = window.walletConnection.account();
  console.log(account);
  return (
    <>
      <button onClick={login}>CONNECT WALLET</button>
    </>
  );
}

export default App;
