import { useState } from "react";

import "./App.css";
import SignMessage from "./components/SignMessage.jsx";
import VerifyMessage from "./components/VerifyMessage";
import VerifiedSignatures from "./components/VerifiedSignatures";
import WalletButton from "./components/WalletButton";
import ErrorMessage from "./components/ErrorMessage";

const INITIAL_SIGNATURES = [
  {
    message: "An example signed message",
    signatureHash: "0xddd2d40ef499a0ebffdfcffa6984b5009f43148b41e5d8e221b2fff0016ec3136f63b112515ad89c335bd5afa8c021013d657aaae7266bb2c5c982db24f7adad1b",
    address: "0x5DAAC14781a5C4AF2B0673467364Cba46Da935dB",
    timestamp: "Jun 12 2022 12:39:55",
  },
];

function App() {
  const [signatures, setSignatures] = useState(INITIAL_SIGNATURES);
  const [error, setError] = useState(null);

  const sigToArrHandler = (sigData) => {
    setSignatures((prevSignatures) => {
      return [sigData, ...prevSignatures];
    });
  };

  return (
    <div className="App">
      <ErrorMessage message={error}></ErrorMessage>
      <div className="banner">
        <div className="banner-container">
          <div className="title">
            <span>Alchemy Signature Generator</span>
          </div>
          <WalletButton setError={setError} />
        </div>
      </div>
      <div className="main-container">
        <div className="upper-container">
          <SignMessage onSubmit={sigToArrHandler} setError={setError} />
          <VerifyMessage signatures={signatures} />
        </div>
        <div className="lower-container">
          <VerifiedSignatures signatures={signatures}></VerifiedSignatures>
        </div>
      </div>
    </div>
  );
}

export default App;
