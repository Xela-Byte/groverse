import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';
import useHexToRGBA from '../utils/hooks/useHexToRGBA';

export const profileStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  avatarContainer: {
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    backgroundColor: appColors.gray,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: sizeBlock.getHeightSize(50),
  },
  tabContainer: {
    paddingVertical: sizeBlock.getHeightSize(50),
    rowGap: sizeBlock.getHeightSize(20),
  },
  tabContent: {
    padding: sizeBlock.getWidthSize(15),
    backgroundColor: useHexToRGBA(appColors.white, 0.1),
    borderRadius: borderRadius.small,
    ...universalStyle.verticalCentering,
    columnGap: sizeBlock.getWidthSize(10),
  },
});
