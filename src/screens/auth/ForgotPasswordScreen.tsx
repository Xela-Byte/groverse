import {useForm} from 'react-hook-form';
import {SafeAreaView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import CustomText from '../../components/text/CustomText';
import {loginStyle} from '../../styles/LoginStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {ForgotPasswordScreenProps} from '../../types/navigation/AuthNavigationType';
import {EMAIL_REGEX} from '../../utils/data/Regex';

type FormValues = {
  email: string;
  phonenumber: string;
};

const ForgotPasswordScreen = ({navigation}: ForgotPasswordScreenProps) => {
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    navigation.navigate('VerifyScreen');
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <FastImage
        source={require('../../assets/pngs/groverseFull.png')}
        style={loginStyle.logo}
        resizeMode="contain"
      />
      <View style={loginStyle.content}>
        <View style={loginStyle.textContainer}>
          <Animatable.View animation={'slideInUp'} duration={1500}>
            <CustomText
              customStyle={{
                textAlign: 'center',
              }}
              fontType="semiBold"
              color={appColors.white}
              fontSize={fontSize.medium}>
              Hello,{' '}
              <CustomText
                customStyle={{
                  textAlign: 'center',
                }}
                fontType="semiBold"
                color={appColors.green}
                fontSize={fontSize.medium}>
                Xela!
              </CustomText>
            </CustomText>
          </Animatable.View>
        </View>
        <View
          style={[
            loginStyle.textContainer,
            {height: sizeBlock.getHeightSize(70)},
          ]}>
          <Animatable.View delay={1000} animation={'slideInUp'}>
            <CustomText
              customStyle={{
                textAlign: 'center',
                lineHeight: sizeBlock.getHeightSize(30),
              }}
              fontType="semiBold"
              color={appColors.white}
              fontSize={fontSize.medium}>
              Let's retrieve your account.
            </CustomText>
          </Animatable.View>
        </View>

        <CustomInput
          iconName="mail"
          control={control}
          name="email"
          placeholder="Email Address"
          rules={{
            required: 'Please enter email',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          iconName="dots-three-horizontal"
          control={control}
          name="phonenumber"
          placeholder="Phone Number"
          rules={{
            required: 'Please enter phone number',
          }}
        />

        <CustomButton
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
          title="SUBMIT"
          customViewStyle={{
            marginTop: sizeBlock.getHeightSize(50),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
