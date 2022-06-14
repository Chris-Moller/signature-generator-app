import "./styles/VerifyMessage.css";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
const { ethers } = require("ethers");
const { hashMessage } = require("@ethersproject/hash");

const VerifyMessage = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const signatureToVerify = async ({ address, message, signature }) => {
    try {
      const signerAddr = ethers.utils.recoverAddress(
        hashMessage(message),
        signature
      );
      console.log(signerAddr);
      if (signerAddr !== address) {
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const verifySignatureHandler = async (e) => {
    e.preventDefault();
    const entry = new FormData(e.target);
    setSuccess();
    setError();
    const verify = await signatureToVerify({
      address: entry.get("address"),
      message: entry.get("message"),
      signature: entry.get("signature"),
    });

    if (verify) {
      setSuccess("Valid signature!");
    } else {
      setError("Invalid signature!");
    }
  };
  return (
    <div className="card1">
      <div className="banner-sign">
        <span>Verify Signatures</span>
      </div>
      <form
        className="verify-form"
        id="form-submit2"
        onSubmit={verifySignatureHandler}
      >
        <div className="form-title-message">
          <span>Address</span>
        </div>
        <input
          className="address-input"
          type="text"
          name="address"
          placeholder="0x..."
        ></input>
        <div className="form-title-message">
          <span>Message</span>
        </div>

        <textarea
          className="message-input2"
          type="text"
          name="message"
          placeholder="Enter a message here..."
        ></textarea>
        <div className="form-title-message">
          <span>Signature</span>
        </div>
        <input
          className="signature-input2"
          type="text"
          name="signature"
        ></input>
      </form>
      <div className="alert-div">
        <SuccessMessage message={success}></SuccessMessage>
        <ErrorMessage message={error}></ErrorMessage>
        <button
          className="sign-message-button"
          type="submit"
          form="form-submit2"
        >
          <span>Verify Signature</span>
        </button>
      </div>
    </div>
  );
};

export default VerifyMessage;