import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const successStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  checkContainer: {
    width: sizeBlock.getWidthSize(150),
    height: sizeBlock.getWidthSize(150),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.white,
    ...universalStyle.centering,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: sizeBlock.getHeightSize(60),
  },
});
