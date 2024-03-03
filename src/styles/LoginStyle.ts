import {StyleSheet} from 'react-native';
import {screenWidth, sizeBlock, universalStyle} from './UniversalStyle';

export const loginStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  logo: {
    marginTop: sizeBlock.getHeightSize(70),
    marginBottom: sizeBlock.getHeightSize(10),
    marginLeft: (screenWidth - sizeBlock.getWidthSize(100)) / 2,
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
  },
  footer: {
    width: '100%',
    ...universalStyle.spaceBetween,
    paddingHorizontal: sizeBlock.getWidthSize(5),
    paddingVertical: sizeBlock.getHeightSize(30),
  },
  remember: {
    ...universalStyle.flexBetween,
    columnGap: sizeBlock.getWidthSize(5),
  },
  textContainer: {
    height: sizeBlock.getHeightSize(50),
    overflow: 'hidden',
  },
});
