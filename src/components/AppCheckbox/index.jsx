import PropTypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.label
 * @param {Boolean} props.checked
 * @param {Function} props.onChange
 * @returns React.JSX.Element
 */
const AppCheckbox = (props) => {
  const handleChange = (e) => props.onChange(props.name, e.target.checked);
  return (
    <div className="app-checkbox">
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        checked={props.checked}
        onChange={handleChange}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

AppCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

AppCheckbox.defaultProps = {
  label: "Checkbox",
  name: "checkbox1",
  checked: false,
  onChange: () => null,
};
export default AppCheckbox;
