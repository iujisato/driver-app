import React from 'React';
import { Button, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';

const MenuButton = props => {
  const { toggleDrawer } = props.navigation;

  return (
    <Button
      icon={ <Icon name='menu' color='#fff' size={35} /> }
      onPress={ () => toggleDrawer() }
    />
  )
}

export default MenuButton;
