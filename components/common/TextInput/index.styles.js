import { colors } from '../../../colors';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const containerStyle = {
  marginBottom: 20,
  width: width - 50,
  justifyContent: 'center',
}

export const inputContainerStyle = {
  borderBottomWidth: 0,
  width: width - 100,
}

export const inputStyle = {
  borderBottomWidth: 1,
  borderBottomColor: 'white',
  color: colors.logo.green || 'white',
  alignItems: 'flex-end',
  paddingBottom: 0,
}

export const leftIconContainerStyle = {
  alignItems: 'flex-end',
  marginBottom: 0,
  paddingBottom: 0,
  marginBottom: 0,
  marginRight: 8,
}
