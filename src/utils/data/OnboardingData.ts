import {nanoid} from '@reduxjs/toolkit';
import {ImageURISource} from 'react-native';
import {Source} from 'react-native-fast-image';

export interface OnboardingDataType {
  key: string;
  title: string;
  image: number | Source | undefined;
}

export const onboardingData: OnboardingDataType[] = [
  {
    key: nanoid(),
    title: 'Keep The Energy You\nProduce',
    image: require('../../assets/jpgs/onboarding-1.jpg'),
  },
  {
    key: nanoid(),
    title: 'Powering Access to Brighter\nLives',
    image: require('../../assets/jpgs/onboarding-1.jpg'),
  },
  {
    key: nanoid(),
    title: "Let's Go!",
    image: require('../../assets/jpgs/onboarding-2.jpg'),
  },
];
