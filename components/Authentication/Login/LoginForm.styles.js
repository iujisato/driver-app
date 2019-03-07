import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../colors';

const { height } = Dimensions.get('window');

const containerHeight = (height / 1618) * 550;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  height: ${containerHeight};
`;

export const FormContainer = styled.View`
  height: ${containerHeight * 0.75}
  justify-content: center;
`;

export const InputContainer = styled.View`
  padding-bottom: ${props => props.paddingBottom || 25};
`;

export const ActionsContainer = styled.View`
  justify-content: center;
  height: ${containerHeight * 0.25}
`;
