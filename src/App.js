import { ConnectWallet, useAddress} from "@thirdweb-dev/react";

function App() {
  const address = useAddress();
  
  console.log("address", address);
  return (
    <div>
    <h1> This is Testing ...</h1>
      <ConnectWallet />
    </div>
  );
}

export default App;