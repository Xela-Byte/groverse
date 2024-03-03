import {Dimensions} from 'react-native';

export const appColors = {
  green: '#07A53D',
  black: '#1E1E1E',
  white: '#FFFFFF',
  gray: '#D9D9D9',
  lightGreen: '#B4F9D2',
};

import {StyleSheet} from 'react-native';
import {sizes} from '../utils/responsiveness/sizeBlock';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const sizeBlock = new sizes(screenHeight, screenWidth);

export const fontSize = {
  primary: sizeBlock.fontSize(14),
  small: sizeBlock.fontSize(16),
  medium: sizeBlock.fontSize(25),
  large: sizeBlock.fontSize(50),
};

export const fontFamily = {
  light: 'Jost-Light',
  thin: 'Jost-Thin',
  regular: 'Jost-Regular',
  medium: 'Jost-Medium',
  semiBold: 'Jost-SemiBold',
  bold: 'Jost-Bold',
  lightItalic: 'Jost-LightItalic',
  mediumItalic: 'Jost-MediumItalic',
  semiBoldItalic: 'Jost-SemiBoldItalic',
  boldItalic: 'Jost-BoldItalic',
};

export const borderRadius = {
  small: 8,
  medium: 15,
  large: 30,
  full: 9999,
};

export const universalStyle = StyleSheet.create({
  centering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  verticalCentering: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: appColors.black,
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spaceEvenly: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  spaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
