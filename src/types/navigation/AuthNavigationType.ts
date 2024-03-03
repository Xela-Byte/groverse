import {NavigationProp} from '@react-navigation/native';

export type AuthStackParamList = {
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  VerifyScreen: undefined;
  ForgotPasswordScreen: undefined;
};

export type OnboardingScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'OnboardingScreen'>;
};

export type LoginScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'LoginScreen'>;
};

export type RegisterScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'RegisterScreen'>;
};

export type VerifyScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'VerifyScreen'>;
};

export type ForgotPasswordScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'ForgotPasswordScreen'>;
};
