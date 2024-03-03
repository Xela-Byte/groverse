import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../../../screens/inApp/cart/CartScreen';
import {CartStackParamList} from '../../../types/navigation/CartNavigationType';
import CheckoutScreen from '../../../screens/inApp/cart/CheckoutScreen';
import PayAsYouGoScreen from '../../../screens/inApp/cart/PayAsYouGoScreen';
import PaymentPlanScreen from '../../../screens/inApp/cart/PaymentPlanScreen';
import SuccessScreen from '../../../screens/inApp/cart/SuccessScreen';

const CartStack = () => {
  const Stack = createNativeStackNavigator<CartStackParamList>();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'CartScreen'}>
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="PayAsYouGoScreen" component={PayAsYouGoScreen} />
        <Stack.Screen name="PaymentPlanScreen" component={PaymentPlanScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </>
  );
};

export default CartStack;
