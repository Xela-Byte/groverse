import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../../../screens/inApp/cart/CartScreen';
import {CartStackParamList} from '../../../types/navigation/CartNavigationType';
import CheckoutScreen from '../../../screens/inApp/cart/CheckoutScreen';
import PayAsYouGoScreen from '../../../screens/inApp/cart/PayAsYouGoScreen';
import PaymentPlanScreen from '../../../screens/inApp/cart/PaymentPlanScreen';
import SuccessScreen from '../../../screens/inApp/cart/SuccessScreen';
import {
  ProfileScreenProps,
  ProfileStackParamList,
} from '../../../types/navigation/ProfileNavigationType';
import ProfileScreen from '../../../screens/inApp/profile/ProfileScreen';
import DetailsScreen from '../../../screens/inApp/profile/DetailsScreen';
import EditScreen from '../../../screens/inApp/profile/EditScreen';
import ReferralScreen from '../../../screens/inApp/profile/ReferralScreen';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator<ProfileStackParamList>();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ProfileScreen'}>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="ReferralScreen" component={ReferralScreen} />
      </Stack.Navigator>
    </>
  );
};

export default ProfileStack;
