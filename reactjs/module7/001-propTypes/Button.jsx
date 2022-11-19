import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { children, background, width } = this.props;
    return (
      <button style={{background, width: `${width}px`}}>{children}</button>
    )
  }
}

Button.propTypes = {
  background: PropTypes.string,
  width: PropTypes.number.isRequired,
}

export default Button;