import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputFieldGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        name={name}
        className={classnames("form-group form-control-lg ", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
InputFieldGroup.defaultProps = {
  type: "text",
};
export default InputFieldGroup;
