import {StyleSheet} from 'react-native';
import {
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const itemDetailStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  itemImage: {
    width: '100%',
    height: sizeBlock.getHeightSize(200),
    marginTop: sizeBlock.getHeightSize(30),
    borderRadius: borderRadius.small,
  },
  itemDescription: {
    paddingVertical: sizeBlock.getHeightSize(20),
    rowGap: sizeBlock.getHeightSize(15),
  },
  itemSpecification: {
    ...universalStyle.verticalCentering,
    columnGap: sizeBlock.getWidthSize(15),
  },
  actionContainer: {
    ...universalStyle.flexBetween,
    width: '50%',
    marginLeft: 'auto',
    marginVertical: sizeBlock.getHeightSize(20),
  },
  itemViews: {},
  itemContainer: {
    width: screenWidth / 2.5,
    height: sizeBlock.getHeightSize(200),
    marginRight: sizeBlock.getWidthSize(20),
  },
  itemViewImage: {
    width: '100%',
    height: '70%',
    borderRadius: borderRadius.small,
  },
  itemInfo: {
    width: '100%',
    ...universalStyle.spaceBetween,
    padding: sizeBlock.getWidthSize(5),
  },
  cartSubAction: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
    width: '100%',
    columnGap: screenWidth * 0.05,
  },
});
