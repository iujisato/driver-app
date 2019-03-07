import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { styles } from './index.styles';
import { colors } from '../../../colors';

const CustomSocialIcon = props => {
  const { title, network } = props;

  return (
    <SocialIcon
      title={title}
      button
      type={network}
      style={styles.inline}
      iconColor={colors.white.primary}
      fontStyle={styles.fontStyle}
      />
  )
}

export default CustomSocialIcon;
