import {NavigationProp} from '@react-navigation/native';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  DetailsScreen: undefined;
  EditScreen: undefined;
  ReferralScreen: undefined;
};

export type ProfileScreenProps = {
  navigation: NavigationProp<ProfileStackParamList, 'ProfileScreen'>;
};

export type DetailsScreenProps = {
  navigation: NavigationProp<ProfileStackParamList, 'DetailsScreen'>;
};

export type EditScreenProps = {
  navigation: NavigationProp<ProfileStackParamList, 'EditScreen'>;
};

export type ReferralScreenProps = {
  navigation: NavigationProp<ProfileStackParamList, 'ReferralScreen'>;
};
