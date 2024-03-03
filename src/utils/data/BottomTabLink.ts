import {nanoid} from '@reduxjs/toolkit';
import {IconProps} from 'react-native-vector-icons/Icon';

export interface BottomTabLinkType {
  key: string;
  linkText: string;
  activeLinkIcon: string;
  inactiveLinkIcon: string;
}

export const bottomTabLinks: BottomTabLinkType[] = [
  {
    key: nanoid(),
    linkText: 'Home',
    activeLinkIcon: 'home',
    inactiveLinkIcon: 'home-outline',
  },
  {
    key: nanoid(),
    linkText: 'Cart',
    activeLinkIcon: 'cart',
    inactiveLinkIcon: 'cart-outline',
  },
  {
    key: nanoid(),
    linkText: 'Wallet',
    activeLinkIcon: 'wallet',
    inactiveLinkIcon: 'wallet-outline',
  },
];
