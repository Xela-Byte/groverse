import {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import CartPlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FacebookIcon from '../../assets/svgs/FacebookIcon';
import GoogleIcon from '../../assets/svgs/GoogleIcon';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import ReceiveIcon from 'react-native-vector-icons/Feather';
import SendIcon from 'react-native-vector-icons/Feather';

type Props = {
  onPress: () => void;
  title: string;
  customViewStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  textSize?: number;
  loading?: boolean;
  disabled?: boolean;
  iconName?: string;
  textColor?: string;
};

const CustomButton = ({
  customTextStyle,
  customViewStyle,
  onPress,
  title,
  textSize,
  loading,
  disabled,
  iconName,
  textColor,
}: Props) => {
  const [animate, setAnimate] = useState(false);

  const handlePress = () => {
    setAnimate(true);

    // Reset the animation after a short delay
    setTimeout(() => {
      setAnimate(false);
    }, 300); // Adjust the delay as needed

    // Trigger the onPress function
    onPress();
  };

  const bounce = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.8,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <Pressable disabled={disabled} onPress={handlePress}>
      <Animatable.View
        duration={300}
        animation={animate ? bounce : ''}
        style={[
          styles.container,
          customViewStyle,
          {opacity: disabled ? 0.3 : 1},
        ]}>
        {loading ? (
          <ActivityIndicator
            color={appColors.white}
            size={textSize ? textSize : fontSize.small}
          />
        ) : (
          <>
            {iconName === 'facebook' && <FacebookIcon />}
            {iconName === 'google' && <GoogleIcon />}
            {iconName === 'cartPlus' && (
              <CartPlusIcon
                name="cart-plus"
                size={fontSize.medium}
                color={appColors.green}
                style={{marginLeft: 10}}
              />
            )}
            {iconName === 'receive' && (
              <ReceiveIcon
                name="corner-left-down"
                size={fontSize.medium}
                color={appColors.green}
                style={{marginLeft: 10}}
              />
            )}
            {iconName === 'send' && (
              <SendIcon
                name="send"
                size={fontSize.medium}
                color={appColors.green}
                style={{marginLeft: 10}}
              />
            )}
            {iconName === 'topUp' && (
              <ReceiveIcon
                name="corner-right-up"
                size={fontSize.medium}
                color={appColors.green}
                style={{marginLeft: 10}}
              />
            )}
            {iconName === 'phone' && (
              <PhoneIcon
                name="phone"
                size={fontSize.medium}
                color={appColors.green}
                style={{marginLeft: 10}}
              />
            )}
            {iconName === 'cartCheckout' && (
              <CartPlusIcon
                name="cart-plus"
                size={fontSize.small + 4}
                color={appColors.white}
                style={{marginLeft: 5}}
              />
            )}
            <CustomText
              fontSize={textSize ? textSize : fontSize.small}
              customStyle={customTextStyle}
              fontType="medium"
              color={textColor ?? appColors.black}>
              {title}
            </CustomText>
          </>
        )}
      </Animatable.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.green,
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
  },
});

export default CustomButton;
