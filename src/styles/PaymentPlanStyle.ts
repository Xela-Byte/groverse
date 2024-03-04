import {StyleSheet} from 'react-native';
import {
  universalStyle,
  sizeBlock,
  appColors,
  borderRadius,
} from './UniversalStyle';

export const paymentPlanStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingBottom: sizeBlock.getHeightSize(30),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  durationTabContainer: {
    width: '100%',
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
    columnGap: sizeBlock.getWidthSize(10),
  },
  durationTab: {
    paddingVertical: sizeBlock.getHeightSize(10),
    paddingHorizontal: sizeBlock.getWidthSize(15),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
  },
});
