import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth/AuthNavigator';
import BottomTabNavigator from './bottomTab/BottomTabNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
