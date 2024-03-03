import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/inApp/home/HomeScreen';
import WalletScreen from '../../../screens/inApp/wallet/WalletScreen';
import {WalletStackParamList} from '../../../types/navigation/WalletNavigationType';
import ReceiveScreen from '../../../screens/inApp/wallet/ReceiveScreen';
import SendScreen from '../../../screens/inApp/wallet/SendScreen';
import ConfirmTransferScreen from '../../../screens/inApp/wallet/TransferSuccessScreen';
import TransferSuccessScreen from '../../../screens/inApp/wallet/TransferSuccessScreen';

const WalletStack = () => {
  const Stack = createNativeStackNavigator<WalletStackParamList>();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'WalletScreen'}>
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="ReceiveScreen" component={ReceiveScreen} />
        <Stack.Screen name="SendScreen" component={SendScreen} />
        <Stack.Screen
          name="TransferSuccessScreen"
          component={TransferSuccessScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default WalletStack;
