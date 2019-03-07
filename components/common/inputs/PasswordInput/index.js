import React, { Component } from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { containerStyle, inputContainerStyle, inputStyle, leftIconContainerStyle, rightIconContainerStyle } from './index.styles';
import { colors } from '../../../../colors';

class PasswordInput extends Component {
  state = {
    visible: false,
  }

  toggleVisibility = () => {
    console.log('this on toggle', this.state.visible)
    const { visible } = this.state;

    this.setState({ visible: !visible })
  }

  renderIcon(iconName) {
    console.log('this on renderIcon', this)
    return (
      <Icon
      name={ iconName }
      size={30}
      color={ colors.white.primary }
      padding={0}
      margin={0}
      textAlignVertical='bottom'
      onPress={ this.toggleVisibility }
      />
    )
  }

  render() {
    const { visible } = this.state;

    return (
      <Input
      containerStyle={containerStyle}
      inputContainerStyle={inputContainerStyle}
      inputStyle={inputStyle}
      placeholder='password'
      placeholderTextColor={colors.white.primary}
      leftIcon={this.renderIcon('lock')}
      leftIconContainerStyle={leftIconContainerStyle}
      secureTextEntry={ visible ? false : true }
      rightIcon={ visible ? this.renderIcon('eye-off-outline') : this.renderIcon('eye-outline')}
      rightIconContainerStyle={rightIconContainerStyle}
      />
    );
  }
};

export default PasswordInput;
