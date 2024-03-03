import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const cartStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  itemContainer: {
    ...universalStyle.spaceBetween,
    alignItems: 'flex-start',
  },
  itemImage: {
    width: screenWidth / 3,
    height: sizeBlock.getHeightSize(120),
    borderRadius: borderRadius.medium,
  },
  itemInfo: {
    width: screenWidth / 2,
  },
  itemDiscount: {
    ...universalStyle.verticalCentering,
    columnGap: 10,
  },
  itemDiscountTab: {
    backgroundColor: appColors.green,
    borderRadius: 5,
    padding: 3,
  },
  cartAction: {
    ...universalStyle.spaceBetween,
    paddingTop: sizeBlock.getHeightSize(50),
    paddingHorizontal: sizeBlock.getWidthSize(10),
  },
  cartSubAction: {
    columnGap: 15,
    ...universalStyle.spaceBetween,
    paddingTop: sizeBlock.getHeightSize(50),
    paddingHorizontal: sizeBlock.getWidthSize(10),
  },
});
