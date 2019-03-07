import React, { Component } from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { containerStyle, inputContainerStyle, inputStyle, leftIconContainerStyle } from './index.styles';
import { colors } from '../../../../colors';

class InputWithIcon extends Component {
  renderIcon = () => {
    const { iconName } = this.props;

    return (
      <Icon
        name={ iconName }
        size={30}
        color={ colors.white.primary }
        padding={0}
        margin={0}
        textAlignVertical='bottom'
        />
    )
  }

  render() {
    const { placeholder } = this.props;

    return (
      <Input
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyle}
        leftIconContainerStyle={leftIconContainerStyle}
        placeholder={placeholder}
        placeholderTextColor={colors.white.primary}
        leftIcon={this.renderIcon()}
        />
    );
  }
};

export default InputWithIcon;
