import {View, Text, StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import useHexToRGBA from '../../utils/hooks/useHexToRGBA';
import CustomText from '../text/CustomText';

const RewardHistoryTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CustomText color={appColors.gray}>Referral Points</CustomText>
        <CustomText
          fontType="semiBold"
          fontSize={fontSize.medium}
          customStyle={{
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          color={appColors.white}>
          200
        </CustomText>
        <CustomText color={appColors.gray}>Total Referrals</CustomText>
        <CustomText
          fontType="semiBold"
          fontSize={fontSize.medium}
          customStyle={{
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          color={appColors.white}>
          500
        </CustomText>
        <CustomText color={appColors.gray}>Successful Referrals</CustomText>
        <CustomText
          fontType="semiBold"
          fontSize={fontSize.medium}
          color={appColors.white}>
          100
        </CustomText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: sizeBlock.getWidthSize(30),
    flex: 1,
    backgroundColor: appColors.black,
  },
  content: {
    backgroundColor: useHexToRGBA(appColors.white, 0.2),
    padding: sizeBlock.getWidthSize(20),
    borderRadius: borderRadius.small,
  },
});
export default RewardHistoryTab;
