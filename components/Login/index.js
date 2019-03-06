import React from 'react';
import { Platform, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Divider, Input, Text, Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollContainer, LogoContainer, SocialActionsContainer, DividerContainer, FormContainer} from './index.styles';
import TextInput from '../common/TextInput';
import LogoIcon from '../common/LogoIcon';
import { colors } from '../../colors';

const Login = () => {
  const { height, width } = Dimensions.get('window');
  const { logo } = colors;

  return (
    <ScrollContainer>
      <KeyboardAvoidingView behavior={Platform.select({android: null, ios: 'padding'})}>
          <LogoContainer>
            <LogoIcon width={320} color={logo.green} />
          </LogoContainer>

          <SocialActionsContainer>
            <SocialIcon
              title='Sign in with facebook'
              button
              type='facebook'
              style={{width: width - 50, borderRadius: 10, borderColor: logo.green || '#66cdaa'}}
              iconColor={'white' || logo.green || '#66cdaa'}
              fontStyle={{color: 'white' || logo.green || '#66cdaa'}}
            />
          </SocialActionsContainer>

          <DividerContainer>
            <Divider style={{ backgroundColor: logo.green, height: 2, width: width * 0.5 }} />
          </DividerContainer>

          <FormContainer>
            <TextInput iconName='email' placeholder='email' />
            <TextInput iconName='lock' placeholder='password' />
            <Button type='outline' title='Sign in' containerStyle={{width: width - 100}} buttonStyle={{borderRadius: 10, borderWidth: 2.5, borderColor: logo.green}} titleStyle={{color: logo.green}}/>
          </FormContainer>
      </KeyboardAvoidingView>
    </ScrollContainer>
  )
}

export default Login;
