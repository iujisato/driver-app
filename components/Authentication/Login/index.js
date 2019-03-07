import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollContainer, LogoContainer, SocialActionsContainer, DividerContainer, FormContainer} from './index.styles';
import LoginForm from './LoginForm';
import LogoIcon from '../../common/LogoIcon';
import SocialIcon from '../../common/SocialIcon';
import Divider from '../../common/Divider';
import { colors } from '../../../colors';

const Login = () => {
  const { logo } = colors;

  return (
    <ScrollContainer>
      <KeyboardAvoidingView behavior={ Platform.select({ android: null, ios: 'padding' }) }>
          <LogoContainer>
            <LogoIcon width={320} color={logo.green} />
          </LogoContainer>

          <SocialActionsContainer>
            <SocialIcon title='Sign in with facebook' network='facebook' />
          </SocialActionsContainer>

          <DividerContainer>
            <Divider />
          </DividerContainer>

          <FormContainer>
            <LoginForm />
          </FormContainer>
      </KeyboardAvoidingView>
    </ScrollContainer>
  )
}

export default Login;
