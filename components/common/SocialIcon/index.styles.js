import { Dimensions } from 'react-native';
import { colors } from '../../../colors';

const { width } = Dimensions.get('window');

export const styles = {
  inline: {
    width: width - 50,
    borderRadius: 10,
  },
  fontStyle: {
    color: colors.white.primary,
  }
};
