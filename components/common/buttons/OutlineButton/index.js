import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from './index.styles';

const OutlineButton = props => {
  const { title } = props;

  return (
    <Button
      type='outline'
      title={title}
      containerStyle={styles.containerStyle}
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      />
  )
};

export default OutlineButton;
