import { useEffect, useState } from "react";
import "./styles/WalletButton.css";

const WalletButton = ({ setError }) => {
  const [walletAddress, setWallet] = useState("");
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error(
        "You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  };
  
  const getConnectedWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
          };
        } else {
          throw new Error("Connect to Metamask using the connect wallet button.");
        }
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error(
        "You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  };

  const walletConnectHandler = async () => {
    try {
      const walletResponse = await connectWallet();
      setWallet(walletResponse.address);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setError(null);
        } else {
          setWallet("");
        }
      });
    } else {
      throw Error(
        "You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  };

  const load = async () => {
    try {
      const address = await getConnectedWallet();
      setWallet(address);
      addWalletListener();
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    load();
  }, );

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