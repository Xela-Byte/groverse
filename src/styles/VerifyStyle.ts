import {StyleSheet} from 'react-native';
import {screenWidth, sizeBlock, universalStyle} from './UniversalStyle';

export const verifyStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(40),
  },
  logo: {
    marginTop: sizeBlock.getHeightSize(70),
    marginBottom: sizeBlock.getHeightSize(10),
    marginLeft: (screenWidth - sizeBlock.getWidthSize(100)) / 2,
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
  },
});
