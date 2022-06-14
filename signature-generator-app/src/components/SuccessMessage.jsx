import "./styles/VerifySignature.css";

const SuccessMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="success-alert">
      <span>{message}</span>
    </div>
  );
};

export default SuccessMessage;
