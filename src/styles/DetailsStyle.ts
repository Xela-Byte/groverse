import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';
import useHexToRGBA from '../utils/hooks/useHexToRGBA';

export const detailsStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  tabContainer: {
    width: '100%',
    paddingVertical: sizeBlock.getHeightSize(30),
    rowGap: sizeBlock.getHeightSize(20),
  },
  tabContent: {
    padding: sizeBlock.getHeightSize(10),
    ...universalStyle.verticalCentering,
    columnGap: sizeBlock.getWidthSize(20),
  },
  tabIcon: {
    backgroundColor: useHexToRGBA(appColors.green, 0.2),
    borderRadius: borderRadius.small,
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    ...universalStyle.centering,
  },
});
