import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const editStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(60),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  avatarWrapper: {
    position: 'relative',
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: sizeBlock.getHeightSize(50),
  },
  avatarContainer: {
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    backgroundColor: appColors.gray,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  editIcon: {
    width: sizeBlock.getWidthSize(30),
    height: sizeBlock.getWidthSize(30),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.green,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 3,
    borderColor: appColors.black,
    ...universalStyle.centering,
  },
});
