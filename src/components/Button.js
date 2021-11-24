import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { name, className, buttonClick } = this.props;
    return (
      <button onClick={buttonClick} className={className} type="button">{name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
