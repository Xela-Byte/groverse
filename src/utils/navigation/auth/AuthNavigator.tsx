import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../../../screens/auth/OnboardingScreen';
import {AuthStackParamList} from '../../../types/navigation/AuthNavigationType';
import LoginScreen from '../../../screens/auth/LoginScreen';
import RegisterScreen from '../../../screens/auth/RegisterScreen';
import VerifyScreen from '../../../screens/auth/VerifyScreen';
import ForgotPasswordScreen from '../../../screens/auth/ForgotPasswordScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  const freshInstall = true;

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'OnboardingScreen'}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
