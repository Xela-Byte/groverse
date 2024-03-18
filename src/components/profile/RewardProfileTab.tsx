import {View, Text, StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import Icon from 'react-native-vector-icons/Fontisto';
import XIcon from '../../assets/svgs/XIcon';
import {universalStyle} from '../../styles/UniversalStyle';
import CustomPressable from '../button/CustomPressable';
import useHexToRGBA from '../../utils/hooks/useHexToRGBA';
import CustomButton from '../button/CustomButton';

const RewardProfileTab = () => {
  return (
    <View style={styles.container}>
      <CustomText color={appColors.white}>
        Share your referral code with friends and family. Once they download and
        register, you will be awarded points to purchases products on discount.
      </CustomText>

      <View style={styles.iconContainer}>
        <CustomPressable onPress={() => {}} customViewStyle={styles.pressable}>
          <Icon
            name="whatsapp"
            color={appColors.white}
            size={fontSize.medium}
          />
        </CustomPressable>
        <CustomPressable onPress={() => {}} customViewStyle={styles.pressable}>
          <Icon
            name="facebook"
            color={appColors.white}
            size={fontSize.medium}
          />
        </CustomPressable>
        <CustomPressable onPress={() => {}} customViewStyle={styles.pressable}>
          <XIcon fill={appColors.white} width={fontSize.medium} />
        </CustomPressable>
      </View>
      <CustomButton title="Share" onPress={() => {}} />
      <CustomText
        customStyle={{
          textAlign: 'center',
          marginTop: sizeBlock.getHeightSize(20),
        }}
        color={appColors.white}>
        Terms and conditions
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizeBlock.getWidthSize(30),
    flex: 1,
    backgroundColor: appColors.black,
  },
  iconContainer: {
    paddingVertical: sizeBlock.getWidthSize(30),
    ...universalStyle.spaceEvenly,
  },
  pressable: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    backgroundColor: useHexToRGBA(appColors.white, 0.2),
    ...universalStyle.centering,
    borderRadius: borderRadius.medium,
  },
});

export default RewardProfileTab;
