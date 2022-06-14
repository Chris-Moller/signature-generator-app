import "./styles/SignMessage.css";
const { ethers } = require("ethers");

const SignMessage = (props) => {
  const messageToSign = async ({ message, setError }) => {
	   // Code goes here...
  };

  const signMessageHandler = async (e) => {
	   // Code goes here...
  };

  return (
    <div className="card1">
      <div className="banner-sign">
        <span>Sign Messages</span>
      </div>
      <form
			//Add a pointer to our messageHandler function when a message is submitted
        className="sign-form"
        id="form-submit"
      >
        <div className="form-title-message">
          <span>Message to sign</span>
        </div>
        <textarea
          className="message-input"
          type="text"
          name="message"
          placeholder="Enter a message here..."
        ></textarea>
      </form>
      <div className="alert-div">
        <button
          className="sign-message-button"
          form="form-submit"
          type="submit"
        >
          <span>Sign Message</span>
        </button>
      </div>
    </div>
  );
};

export default SignMessage;