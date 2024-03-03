import {SafeAreaView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../../components/button/CustomButton';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {cartStyle} from '../../../styles/CartStyles';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {CartScreenProps} from '../../../types/navigation/CartNavigationType';

const CartScreen = ({navigation}: CartScreenProps) => {
  return (
    <SafeAreaView style={cartStyle.container}>
      <View style={cartStyle.content}>
        <HeaderComponent title="Cart" showIcon navigation={navigation} />
        <CustomText
          customStyle={{
            marginVertical: sizeBlock.getHeightSize(20),
          }}
          color={appColors.white}>
          CART SUMMARY
        </CustomText>
        <View style={cartStyle.itemContainer}>
          <FastImage
            source={require('../../../assets/jpgs/solarLamp.jpg')}
            style={cartStyle.itemImage}
            resizeMode="contain"
          />
          <View style={cartStyle.itemInfo}>
            <CustomText
              fontType="medium"
              fontSize={fontSize.primary}
              color={appColors.white}>
              DUAL CHARING SOLAR LATTERN, INBUILT SOLAR WITH 77 WATT PANEL.
            </CustomText>
            <CustomText
              customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
              color={appColors.gray}>
              Seller:{' '}
              <CustomText
                fontType="medium"
                customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
                color={appColors.white}>
                Tony eletrical store
              </CustomText>
            </CustomText>
            <CustomText
              fontType="medium"
              fontSize={fontSize.primary}
              color={appColors.white}>
              ₦ 80,000
            </CustomText>
            <View style={cartStyle.itemDiscount}>
              <CustomText
                customStyle={{
                  textDecorationLine: 'line-through',
                  marginVertical: sizeBlock.getHeightSize(5),
                }}
                fontSize={fontSize.primary}
                color={appColors.gray}>
                ₦ 60,000
              </CustomText>
              <View style={cartStyle.itemDiscountTab}>
                <CustomText
                  fontSize={fontSize.primary - 4}
                  color={appColors.gray}>
                  -20%
                </CustomText>
              </View>
            </View>
          </View>
        </View>

        <View style={cartStyle.cartAction}>
          <CustomText color={appColors.white}>Remove</CustomText>
          <CustomButton
            textSize={fontSize.medium}
            textColor={appColors.white}
            customViewStyle={{
              width: sizeBlock.getWidthSize(50),
              borderRadius: borderRadius.small,
            }}
            onPress={() => {}}
            title="−"
          />
          <CustomText color={appColors.white}>3</CustomText>
          <CustomButton
            textSize={fontSize.medium}
            textColor={appColors.white}
            customViewStyle={{
              width: sizeBlock.getWidthSize(50),
              borderRadius: borderRadius.small,
            }}
            onPress={() => {}}
            title="+"
          />
        </View>

        <View style={cartStyle.cartSubAction}>
          <CustomButton
            iconName="cartPlus"
            textSize={fontSize.medium}
            textColor={appColors.white}
            customViewStyle={{
              width: sizeBlock.getWidthSize(50),
              borderRadius: borderRadius.small,
              backgroundColor: appColors.gray,
            }}
            onPress={() => {}}
            title=""
          />
          <CustomButton
            iconName="phone"
            textSize={fontSize.medium}
            textColor={appColors.white}
            customViewStyle={{
              width: sizeBlock.getWidthSize(50),
              borderRadius: borderRadius.small,
              backgroundColor: appColors.gray,
            }}
            onPress={() => {}}
            title=""
          />
          <CustomButton
            iconName="cartCheckout"
            textColor={appColors.white}
            textSize={fontSize.primary - 2}
            customViewStyle={{
              width: '83%',
              borderRadius: borderRadius.small,
              paddingRight: 5,
            }}
            onPress={() => {
              navigation.navigate('CheckoutScreen');
            }}
            title="Checkout (1,800,000)"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
