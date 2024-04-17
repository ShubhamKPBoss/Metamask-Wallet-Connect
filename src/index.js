// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// // This is the chainId your dApp will work on.
// const activeChainId = ChainId.Mainnet;

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <ThirdwebProvider desiredChainId={activeChainId}>
//       <App />
//     </ThirdwebProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

const activeChain = "ethereum";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    supportedWallets={[
      metamaskWallet({
        recommended: true,
      }),
      coinbaseWallet(),
      walletConnect(),
    ]}
    activeChain={activeChain}
    clientId="74a6f099e13f7847edf9cdd9f1fb72b4"
  >
    <App />
  </ThirdwebProvider>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
