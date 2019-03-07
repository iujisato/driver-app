import { Dimensions } from 'react-native';
import { colors } from '../../../../colors';

const { width } = Dimensions.get('window');
const { logo } = colors;

export const styles = {
  containerStyle: {
    width: width - 100,
  },
  buttonStyle: {
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: logo.green,
  },
  titleStyle: {
    color: logo.green,
  },
};
