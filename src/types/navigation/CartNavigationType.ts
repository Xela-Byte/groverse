import {NavigationProp} from '@react-navigation/native';

export type CartStackParamList = {
  CartScreen: undefined;
  CheckoutScreen: undefined;
  PayAsYouGoScreen: undefined;
  PaymentPlanScreen: undefined;
  SuccessScreen: undefined;
};

export type CartScreenProps = {
  navigation: NavigationProp<CartStackParamList, 'CartScreen'>;
};

export type CheckoutScreenProps = {
  navigation: NavigationProp<CartStackParamList, 'CheckoutScreen'>;
};

export type PayAsYouGoScreenProps = {
  navigation: NavigationProp<CartStackParamList, 'PayAsYouGoScreen'>;
};

export type PaymentPlanScreenProps = {
  navigation: NavigationProp<CartStackParamList, 'PaymentPlanScreen'>;
};

export type SuccessScreenProps = {
  navigation: NavigationProp<CartStackParamList, 'SuccessScreen'>;
};
