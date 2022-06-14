import { useEffect, useState } from "react";
import "./styles/WalletButton.css";

const WalletButton = ({ setError }) => {
  const [walletAddress, setWallet] = useState("");

  const connectWallet = async () => {
		// Code goes here...
  };
  
  const getConnectedWallet = async () => {
		// Code goes here...
  };

  const walletConnectHandler = async () => {
		// Code goes here...
  };

  const addWalletListener = () => {
		// Code goes here...
  };

  const load = async () => {
		// Code goes here...
  };

  return (
    <div>
      <button className="wallet-button" onClick={walletConnectHandler}>
        {walletAddress.length > 0 ? (
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>
    </div>
  );
};

export default WalletButton;