import {nanoid} from '@reduxjs/toolkit';
import {SafeAreaView, View} from 'react-native';
import CustomPressable from '../../../components/button/CustomPressable';
import CheckBoxComponent from '../../../components/checkbox/CheckBoxComponent';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {checkoutStyle} from '../../../styles/CheckoutStyle';
import {paymentPlanStyle} from '../../../styles/PaymentPlanStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {PaymentPlanScreenProps} from '../../../types/navigation/CartNavigationType';
import {ScrollView} from 'react-native';
import CustomButton from '../../../components/button/CustomButton';

type PlanType = {
  id: string;
  description: string;
  type: string;
  amount: string;
};

const PaymentPlanScreen = ({navigation}: PaymentPlanScreenProps) => {
  const plans: PlanType[] = [
    {
      id: nanoid(),
      description: 'Daily Repayment',
      type: 'day',
      amount: '₦130.00',
    },
    {
      id: nanoid(),
      description: 'Weekly Repayment',
      type: 'weekly',
      amount: '₦900.00',
    },
    {
      id: nanoid(),
      description: 'Monthly Repayment',
      type: 'monthly',
      amount: '₦3,000.00',
    },
    {
      id: nanoid(),
      description: 'Quarterly Repayment',
      type: 'quarterly',
      amount: '₦9,000.00',
    },
  ];
  return (
    <SafeAreaView style={paymentPlanStyle.container}>
      <ScrollView>
        <View style={paymentPlanStyle.content}>
          <HeaderComponent
            navigation={navigation}
            title="Choose Payment Plan"
            showIcon={false}
          />

          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}
            color={appColors.white}>
            How long do you want to pay back?
          </CustomText>

          <View style={paymentPlanStyle.durationTabContainer}>
            <View style={paymentPlanStyle.durationTab}>
              <CustomText fontType="medium">3 months</CustomText>
            </View>
            <View style={paymentPlanStyle.durationTab}>
              <CustomText fontType="medium">6 months</CustomText>
            </View>
            <View style={paymentPlanStyle.durationTab}>
              <CustomText fontType="medium">12 months</CustomText>
            </View>
          </View>

          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(10),
            }}
            color={appColors.white}>
            Choose method of repayment
          </CustomText>

          {plans.map(plan => {
            const {amount, description, id, type} = plan;

            return (
              <CustomPressable key={id} onPress={() => {}}>
                <View style={checkoutStyle.payTab}>
                  <View style={checkoutStyle.payText}>
                    <CustomText fontType="semiBold">{description}</CustomText>
                    <CustomText fontSize={fontSize.primary}>
                      Refund every {type === 'day' && 'day'}
                      {type === 'weekly' && 'week'}
                      {type === 'monthly' && 'month'}
                      {type === 'quarterly' && '3 months'} for
                      {type === 'quarterly' ? '1 year' : '3 months'}
                    </CustomText>
                    <CustomText fontSize={fontSize.primary}>
                      Daily refund Amount:{' '}
                      <CustomText fontType="semiBold">{amount}</CustomText>
                    </CustomText>
                    <CustomText
                      fontType="mediumItalic"
                      fontSize={fontSize.primary}>
                      Interest rate: 10% p.a
                    </CustomText>
                  </View>
                  <CheckBoxComponent checked onPress={() => {}} />
                </View>
              </CustomPressable>
            );
          })}

          <CustomButton
            customViewStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}
            onPress={() => {
              navigation.navigate('SuccessScreen');
            }}
            title="Confirm"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentPlanScreen;
