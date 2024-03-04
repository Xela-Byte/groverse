import {SafeAreaView, View} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {checkoutStyle} from '../../../styles/CheckoutStyle';
import {CheckoutScreenProps} from '../../../types/navigation/CartNavigationType';
import CustomText from '../../../components/text/CustomText';
import {appColors, fontSize} from '../../../styles/UniversalStyle';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import CustomPressable from '../../../components/button/CustomPressable';

const CheckoutScreen = ({navigation}: CheckoutScreenProps) => {
  return (
    <SafeAreaView style={checkoutStyle.container}>
      <View style={checkoutStyle.content}>
        <HeaderComponent
          title="How do you want to pay"
          navigation={navigation}
          showIcon={false}
        />

        <View style={checkoutStyle.payTabContainer}>
          <View style={checkoutStyle.payTab}>
            <View style={checkoutStyle.payText}>
              <CustomText fontType="semiBold">Pay Right Away</CustomText>
              <CustomText fontSize={fontSize.primary}>
                Pay with your wallet balance
              </CustomText>
              <CustomText fontSize={fontSize.primary}>
                Wallet balance:{' '}
                <CustomText fontType="semiBold">₦50,235</CustomText>
              </CustomText>
            </View>
            <ArrowIcon
              name="chevron-thin-right"
              color={appColors.green}
              size={fontSize.medium}
            />
          </View>

          <CustomPressable
            onPress={() => {
              navigation.navigate('PayAsYouGoScreen');
            }}>
            <View style={checkoutStyle.payTab}>
              <View style={checkoutStyle.payText}>
                <CustomText fontType="semiBold">Pay As You Go</CustomText>
                <CustomText fontSize={fontSize.primary}>
                  Get a credit for a renewable{'\n'}energy product
                </CustomText>
                <CustomText fontSize={fontSize.primary}>
                  Kindly fill your details next
                </CustomText>
              </View>
              <ArrowIcon
                name="chevron-thin-right"
                color={appColors.green}
                size={fontSize.medium}
              />
            </View>
          </CustomPressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
