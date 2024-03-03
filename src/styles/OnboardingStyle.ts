import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
} from './UniversalStyle';

export const onboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.black,
    position: 'relative',
  },
  logo: {
    top: sizeBlock.getHeightSize(70),
    left: (screenWidth - sizeBlock.getWidthSize(100)) / 2,
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    position: 'absolute',
    zIndex: 3,
  },
  image: {
    width: '100%',
    height: '75%',
    opacity: 0.3,
  },
  textContainer: {
    padding: sizeBlock.getWidthSize(20),
  },
  dotStyle: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getHeightSize(5),
    borderRadius: borderRadius.small,
    backgroundColor: appColors.green,
    opacity: 0.3,
    right: screenWidth / 4.5,
    bottom: sizeBlock.getHeightSize(65),
  },
  activeDotStyle: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getHeightSize(5),
    borderRadius: borderRadius.small,
    backgroundColor: appColors.green,
    right: screenWidth / 4.5,
    bottom: sizeBlock.getHeightSize(65),
  },
  authContainer: {
    flex: 1,
    backgroundColor: appColors.black,
  },
  authBackground: {
    flex: 1,
    opacity: 0.3,
    position: 'relative',
  },
  authLogo: {
    top: '35%',
    left: screenWidth / 4,
    width: screenWidth / 2,
    height: screenWidth / 2,
    position: 'absolute',
    zIndex: 3,
  },
  buttonStyle: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: sizeBlock.getWidthSize(20),
    rowGap: sizeBlock.getHeightSize(20),
  },
});
