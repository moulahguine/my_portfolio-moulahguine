import { MdClose } from "react-icons/md";
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
      <MdClose aria-hidden="true" />
    </button>
  );
};

export default CloseButton;
