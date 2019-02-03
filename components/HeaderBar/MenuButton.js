import React from 'React';
import { Button, Icon } from 'react-native-elements';

const MenuButton = props => {
  return (
    <Button
      icon={ <Icon name='menu' color='#fff' size={35} /> }
      onPress={ () => console.log('pressed menu icon') }
    />
  )
}

export default MenuButton;
