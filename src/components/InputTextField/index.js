import React from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';

const InputTextField = () => (
  <div className="keypad-action">
  <div className="input-name">
    <input type="text" placeholder="phone #" />
    <span className="underline-animation" />
  </div>
</div>
);

InputTextField.propTypes = {
  action: PropTypes.func,
  icon: PropTypes.string,
};

InputTextField.defaultProps = {
  icon: '',
};

export default InputTextField;
