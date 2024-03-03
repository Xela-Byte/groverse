import {StyleSheet} from 'react-native';
import {sizeBlock, universalStyle} from './UniversalStyle';

export const payAsYouGoStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  buttonContainer: {
    ...universalStyle.spaceBetween,
    width: '100%',
    paddingBottom: sizeBlock.getHeightSize(30),
  },
});
