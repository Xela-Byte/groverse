import {StyleSheet} from 'react-native';
import {sizeBlock, universalStyle} from './UniversalStyle';

export const referralStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    zIndex: 6,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  detailContainer: {
    paddingTop: sizeBlock.getHeightSize(60),
    ...universalStyle.centering,
    rowGap: sizeBlock.getHeightSize(20),
    flexDirection: 'column',
  },
  details: {
    ...universalStyle.centering,
    columnGap: 5,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
    pointerEvents: 'none',
  },
});
