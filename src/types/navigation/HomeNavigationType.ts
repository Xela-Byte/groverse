import {NavigationProp, RouteProp} from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ItemDetailScreen: {
    itemID: string;
  };
};

export type HomeScreenProps = {
  navigation: NavigationProp<HomeStackParamList, 'HomeScreen'>;
};

export type ItemDetailScreenProps = {
  navigation: NavigationProp<HomeStackParamList, 'ItemDetailScreen'>;
  route: RouteProp<HomeStackParamList, 'ItemDetailScreen'>;
};
