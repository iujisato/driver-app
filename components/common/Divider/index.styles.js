import { Dimensions } from 'react-native';
import { colors } from '../../../colors';

const { width } = Dimensions.get('window');

export const styles = {
  backgroundColor: colors.logo.green,
  height: 2,
  width: width * 0.5,
};
