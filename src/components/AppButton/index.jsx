import PropTypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.text
 * @param {String} props.className
 * @param {String} props.icon
 * @param {Boolean} props.outline
 * @param {Boolean} props.onlyIcon
 * @param {Function} props.onClick
 * @returns React.JSX.Element
 */
const AppButton = (props) => {
  const className = `app-btn ${props.className} ${
    props.outline ? "outline" : ""
  }`;
  return (
    <button
      style={{
        cursor: props.disabled ? "not-allowed" : "pointer",
      }}
      disabled={props.disabled}
      className={className}
      onClick={props.onClick}
    >
      {!props.onlyIcon && <span className="app-btn--text">{props.text}</span>}
      {props.icon && (
        <img className="app-btn--icon" src={props.icon} alt="no-icon" />
      )}
    </button>
  );
};

AppButton.propTypes = {
  outline: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  onlyIcon: PropTypes.bool,
  disabled: PropTypes.bool,
};

AppButton.defaultProps = {
  text: "click",
  outline: false,
  onlyIcon: false,
  onClick: () => null,
  disabled: false,
};
export default AppButton;
