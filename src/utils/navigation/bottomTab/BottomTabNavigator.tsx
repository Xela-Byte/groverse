import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabComponent from '../../../components/bottomTab/BottomTabComponent';
import CartStack from '../inApp/CartStack';
import HomeStack from '../inApp/HomeStack';
import WalletStack from '../inApp/WalletStack';
import * as Animatable from 'react-native-animatable';
import ProfileStack from '../inApp/ProfileStack';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBar={props => <BottomTabComponent {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
