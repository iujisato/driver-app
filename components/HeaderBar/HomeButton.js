import React from 'React';
import { Button, Icon } from 'react-native-elements';

const HomeButton = props => {
  const { navigate } = props.navigation;

  return (
    <Button
      icon={ <Icon name='home' color='#fff' size={30}/> }
      onPress={ () => navigate('Home') }
    />
  )
}
export default HomeButton;
