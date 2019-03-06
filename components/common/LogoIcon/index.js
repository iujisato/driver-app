import React from 'react';
import Logo from './tutius-logo.svg';

const LogoIcon = props => {
  const { width, color } = props;

  // This is calculated to keep the original ratio of the logo.
  const height = 0.6 * width;

  return (
    <Logo width={width} height={height} color={color} />
  )
}

export default LogoIcon;

