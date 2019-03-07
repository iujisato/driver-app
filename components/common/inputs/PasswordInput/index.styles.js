import { colors } from '../../../../colors';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const { logo, white } = colors;

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
  borderBottomColor: white.primary,
  color: logo.green,
  paddingBottom: 0,
}

export const leftIconContainerStyle = {
  marginRight: 8,
}

export const rightIconContainerStyle = {
  borderBottomWidth: 1,
  marginLeft: 0,
  borderColor: white.primary,
}
