import PropTypes from "prop-types";
import { TimesIcon } from "../Icons/CustomIcons";
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
      <TimesIcon />
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
};

export default CloseButton;
