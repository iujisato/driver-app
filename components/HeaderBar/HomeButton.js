import React from 'React';
import { Button, Icon } from 'react-native-elements';

const HomeButton = props => {
  return (
    <Button
      icon={ <Icon name='home' color='#fff' size={30}/> }
      onPress={ () => console.log('pressed home icon') }
    />
  )
}

export default HomeButton;
