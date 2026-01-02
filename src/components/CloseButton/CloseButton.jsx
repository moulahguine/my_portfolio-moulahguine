import { FiX } from "react-icons/fi";
import "./CloseButton.scss";

const CloseButton = ({
  onClick,
  ariaLabel = "Close",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`close-button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      <FiX size={20} />
    </button>
  );
};

export default CloseButton;
