import {NavigationProp} from '@react-navigation/native';

export type WalletStackParamList = {
  WalletScreen: undefined;
  ReceiveScreen: undefined;
  SendScreen: undefined;
  TransferSuccessScreen: undefined;
  PinCodeScreen: undefined;
};

export type WalletScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'WalletScreen'>;
};

export type ReceiveScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'ReceiveScreen'>;
};

export type SendScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'SendScreen'>;
};

export type TransferSuccessScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'TransferSuccessScreen'>;
};

export type PinCodeScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'PinCodeScreen'>;
};
