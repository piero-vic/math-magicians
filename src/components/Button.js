import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { name, className } = this.props;
    return (
      <button className={className} type="button">{name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
