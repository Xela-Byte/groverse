import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/inApp/home/HomeScreen';
import {HomeStackParamList} from '../../../types/navigation/HomeNavigationType';
import ItemDetailScreen from '../../../screens/inApp/home/ItemDetailScreen';

const HomeStack = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HomeScreen'}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
