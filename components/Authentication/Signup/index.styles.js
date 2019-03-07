import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../colors';

const { height, width } = Dimensions.get('window');
const { logo } = colors;

export const ScrollContainer = styled.ScrollView`
  background-color: ${logo.purple};
`;

export const LogoContainer = styled.View`
  height: ${(height / 1618) * 568};
  align-items: center;
  justify-content: flex-end;
`;

export const SocialActionsContainer = styled.View`
  height: ${(height / 1618) * 275};
  align-items: center;
  justify-content: flex-end;
`;

export const DividerContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: ${(height / 1618) * 100};
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  height: ${(height / 1618) * 600};
`;
