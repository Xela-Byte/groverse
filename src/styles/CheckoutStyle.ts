import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const checkoutStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  payTab: {
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
    padding: sizeBlock.getWidthSize(20),
    marginTop: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceBetween,
  },
  payText: {
    width: '95%',
  },
  payTabContainer: {
    paddingTop: sizeBlock.getHeightSize(20),
  },
});
