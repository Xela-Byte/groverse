import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';
import useHexToRGBA from '../utils/hooks/useHexToRGBA';

export const homeStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  avatarContainer: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    backgroundColor: appColors.gray,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  searchBar: {
    width: '100%',
    backgroundColor: useHexToRGBA(appColors.gray, 0.2),
    marginTop: sizeBlock.getHeightSize(20),
    height: 50,
    minHeight: sizeBlock.getHeightSize(50),
  },
  searchBarInput: {
    fontFamily: fontFamily.regular,
    color: appColors.black,
    height: '100%',
    fontSize: fontSize.primary,
    minHeight: sizeBlock.getHeightSize(50),
  },
  itemContainer: {
    width: '48%',
    height: sizeBlock.getHeightSize(150),
    marginBottom: sizeBlock.getHeightSize(10),
  },
  itemImage: {
    width: '100%',
    height: '70%',
    borderRadius: borderRadius.small,
  },
  itemInfo: {
    width: '100%',
    ...universalStyle.spaceBetween,
    padding: sizeBlock.getWidthSize(5),
  },
});
