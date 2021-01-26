import PropTypes from 'prop-types';
import React from 'react';

import { StyledBtn, MiniExtra } from './Button.styles';

export const Button = ({children, ...props}) => {
  return (
    <StyledBtn variant='contained' {...props}>
      {children}
      <MiniExtra />
    </StyledBtn>
  )
};

Button.displayName = 'Button';

Button.defaultProps = {
  color: 'secondary'
};

Button.propTypes = {
  color: PropTypes.oneOf(['amber', 'yellow', 'green', 'primary', 'secondary']),
};

export default Button;
