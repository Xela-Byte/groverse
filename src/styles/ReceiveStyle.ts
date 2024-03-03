import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const receiveStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  infoContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(70),
    backgroundColor: appColors.lightGreen,
    marginTop: sizeBlock.getHeightSize(20),
    borderRadius: borderRadius.small,
    ...universalStyle.spaceBetween,
    paddingLeft: sizeBlock.getWidthSize(15),
    paddingRight: sizeBlock.getWidthSize(40),
    columnGap: 10,
  },
  qrCodeContent: {
    alignItems: 'center',
    paddingVertical: sizeBlock.getHeightSize(30),
  },
});
