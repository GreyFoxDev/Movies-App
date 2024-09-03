import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.type
 * @param {String} props.placeholder
 * @param {String} props.name
 * @param {Function} props.onChange
 * @param {String} props.error
 * @returns React.JSX.Element
 */
const AppInputField = (props) => {
  const handleChange = (e) => props.onChange(props.name, e.target.value);

  return (
    <div className="app-inputField-wrapper">
      <input
        name={props.name}
        type={props.type}
        onChange={handleChange}
        className={`app-inputField ${props.error ? "error" : ""}`}
        placeholder={props.placeholder}
      />
      {props.error && <span className="error-message">{props.error}</span>}
    </div>
  );
};

AppInputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AppInputField.defaultProps = {
  name: "text",
  type: "text",
  placeholder: "Enter here...",
  onChange: () => null,
  error: null,
};

export default AppInputField;
