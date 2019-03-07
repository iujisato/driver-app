import React, { Component } from 'react';
import { Container, FormContainer, InputContainer, ActionsContainer } from './LoginForm.styles';
import InputWithIcon from '../../common/inputs/InputWithIcon';
import PasswordInput from '../../common/inputs/PasswordInput';
import OutlineButton from '../../common/buttons/OutlineButton';

class LoginForm extends Component {
  render() {
    return (
      <Container>
        <FormContainer>
          <InputContainer>
            <InputWithIcon iconName='email' placeholder='email' />
          </InputContainer>

          <InputContainer paddingBottom={0} >
            <PasswordInput />
          </InputContainer>
        </FormContainer>

        <ActionsContainer>
          <OutlineButton title='Sign in' />
        </ActionsContainer>
      </Container>
    )
  }
}

export default LoginForm;
