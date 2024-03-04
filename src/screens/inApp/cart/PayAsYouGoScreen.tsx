import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {PayAsYouGoScreenProps} from '../../../types/navigation/CartNavigationType';
import {payAsYouGoStyle} from '../../../styles/PayAsYouGoStyle';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../components/input/CustomInput';
import {loginStyle} from '../../../styles/LoginStyle';
import CheckBoxComponent from '../../../components/checkbox/CheckBoxComponent';
import {Pressable} from 'react-native';
import OutlinedButton from '../../../components/button/OutlinedButton';
import CustomButton from '../../../components/button/CustomButton';

const PayAsYouGoScreen = ({navigation}: PayAsYouGoScreenProps) => {
  type FormValues = {};
  const {control, handleSubmit} = useForm<FormValues>();
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <SafeAreaView style={payAsYouGoStyle.container}>
      <ScrollView>
        <View style={payAsYouGoStyle.content}>
          <HeaderComponent
            navigation={navigation}
            title="Pay As You Go"
            showIcon={false}
          />

          <CustomText
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}
            fontSize={fontSize.medium}
            fontType="semiBold"
            color={appColors.white}>
            Your Details
          </CustomText>

          <CustomText
            color={appColors.white}
            customStyle={{
              marginVertical: sizeBlock.getHeightSize(20),
            }}>
            Kindly fill the form below accurately. Kindly ensure the details
            match with the details on your BVN. Thank you.
          </CustomText>

          <CustomInput
            iconName="user"
            control={control}
            name="firstName"
            placeholder="First Name (As on your BVN)"
          />

          <CustomInput
            iconName="user"
            control={control}
            name="surname"
            placeholder="Surname"
          />

          <CustomInput
            iconName="phone"
            control={control}
            name="phoneNumber"
            placeholder="Phone Number"
          />

          <CustomInput
            iconName="calendar"
            control={control}
            name="dob"
            placeholder="Date of Birth"
          />

          <CustomInput
            iconName="v-card"
            control={control}
            name="nin"
            placeholder="NIN"
          />

          <CustomInput
            iconName="address"
            control={control}
            name="address"
            placeholder="Home address"
          />

          <View style={loginStyle.footer}>
            <View
              style={[
                loginStyle.remember,
                {
                  columnGap: sizeBlock.getWidthSize(10),
                },
              ]}>
              <CheckBoxComponent
                checked={remember}
                onPress={() => {
                  setRemember(!remember);
                }}
              />
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                I agree to the{' '}
                <CustomText
                  fontSize={fontSize.primary}
                  customStyle={{
                    textDecorationLine: 'underline',
                  }}
                  color={appColors.gray}>
                  terms and conditions{' '}
                </CustomText>
              </CustomText>
            </View>
          </View>

          <View style={payAsYouGoStyle.buttonContainer}>
            <OutlinedButton
              customViewStyle={{
                width: '92%',
              }}
              onPress={() => {
                navigation.goBack();
              }}
              title="Back"
            />
            <CustomButton
              customViewStyle={{
                width: '92%',
              }}
              onPress={() => {
                navigation.navigate('PaymentPlanScreen');
              }}
              title="Next"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PayAsYouGoScreen;
