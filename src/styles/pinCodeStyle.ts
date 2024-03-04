import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

const spacing = sizeBlock.getWidthSize(20);
const pinSpacing = sizeBlock.getWidthSize(10);
const pinLength = 4;
const pinContainerSize = screenWidth / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSize = pinMaxSize - pinSpacing;

export const pinCodeStyle = StyleSheet.create({
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
  text: {
    ...universalStyle.centering,
    paddingVertical: sizeBlock.getHeightSize(30),
  },
  padContainer: {
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  pinContent: {
    flexDirection: 'row',
    gap: pinSpacing * 2,
    marginBottom: spacing * 2,
    height: pinSize * 2,
    alignItems: 'flex-end',
  },
});
