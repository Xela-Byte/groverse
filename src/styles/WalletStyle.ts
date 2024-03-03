import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const walletStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  walletContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(190),
    backgroundColor: appColors.green,
    borderRadius: borderRadius.small,
    marginTop: sizeBlock.getHeightSize(50),
    position: 'relative',
  },
  avatarContainer: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    backgroundColor: appColors.gray,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    position: 'absolute',
    top: -sizeBlock.getWidthSize(25),
    left: (screenWidth - sizeBlock.getWidthSize(100)) / 2,
    borderWidth: 5,
    borderColor: appColors.black,
  },
  balanceText: {
    paddingTop: sizeBlock.getHeightSize(50),
    paddingBottom: sizeBlock.getHeightSize(5),
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(20),
  },
  addressText: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    columnGap: sizeBlock.getWidthSize(10),
    ...universalStyle.centering,
  },
  walletAction: {
    paddingVertical: sizeBlock.getHeightSize(40),
    paddingHorizontal: sizeBlock.getWidthSize(20),
    ...universalStyle.spaceBetween,
  },
  walletButton: {
    ...universalStyle.centering,
    flexDirection: 'column',
    rowGap: 5,
  },
  historyTab: {
    paddingVertical: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceBetween,
  },
});
