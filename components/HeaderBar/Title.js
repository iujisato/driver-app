import React from 'React';
import { Text } from 'react-native-elements';
import { styles } from './Title.styles';

const Title = props => {
  return (
    <Text style={styles}>{props.title}</Text>
  )
}

export default Title
