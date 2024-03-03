import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import {loginStyle} from '../../styles/LoginStyle';
import FastImage from 'react-native-fast-image';
import {onboardingStyle} from '../../styles/OnboardingStyle';
import CustomText from '../../components/text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import CustomInput from '../../components/input/CustomInput';
import {useForm} from 'react-hook-form';
import {
  LoginScreenProps,
  RegisterScreenProps,
} from '../../types/navigation/AuthNavigationType';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/data/Regex';
import CustomButton from '../../components/button/CustomButton';
import OutlinedButton from '../../components/button/OutlinedButton';
import CheckBoxComponent from '../../components/checkbox/CheckBoxComponent';
import {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import useHexToRGBA from '../../utils/hooks/useHexToRGBA';

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const {control, handleSubmit, watch} = useForm<FormValues>();
  const [remember, setRemember] = useState<boolean>(false);

  const onSignUp = (data: FormValues) => {
    navigation.navigate('VerifyScreen');
  };

  const password = watch('password');

  return (
    <SafeAreaView style={loginStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                fontSize={fontSize.medium + 10}>
                Create a{' '}
                <CustomText
                  customStyle={{
                    textAlign: 'center',
                  }}
                  fontType="semiBold"
                  color={appColors.green}
                  fontSize={fontSize.medium + 10}>
                  Groverse
                </CustomText>
              </CustomText>
            </Animatable.View>
          </View>
          <View style={loginStyle.textContainer}>
            <Animatable.View delay={1000} animation={'slideInUp'}>
              <CustomText
                customStyle={{
                  textAlign: 'center',
                }}
                fontType="semiBold"
                color={appColors.white}
                fontSize={fontSize.medium + 10}>
                Account
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
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}
          />

          <CustomInput
            iconName="user"
            control={control}
            name="name"
            placeholder="User Name"
            rules={{
              required: 'Please enter name',
              validate: (value: string) => value.length > 4,
            }}
          />
          <CustomInput
            iconName="dots-three-horizontal"
            control={control}
            name="password"
            placeholder="Password"
            password
            rules={{
              required: 'Please enter password',
              pattern: {value: PASSWORD_REGEX, message: 'Password is invalid'},
            }}
          />
          <CustomInput
            iconName="dots-three-horizontal"
            control={control}
            name="confirmPassword"
            placeholder="Confirm Password"
            password
            rules={{
              required: 'Confirm password',
              validate: (value: string) =>
                value === password || "Password does't match",
            }}
          />

          <CustomText
            customStyle={{
              textAlign: 'center',
              marginTop: sizeBlock.getHeightSize(10),
            }}
            color={useHexToRGBA(appColors.gray, 0.3)}>
            You agree to our{' '}
            <CustomText
              customStyle={{
                textAlign: 'center',
                marginTop: sizeBlock.getHeightSize(10),
              }}
              color={appColors.gray}>
              Terms of Service
            </CustomText>{' '}
            as you continue to sign up.
          </CustomText>
          <CustomButton
            onPress={() => {
              handleSubmit(onSignUp)();
            }}
            title="SIGN UP"
            customViewStyle={{
              marginTop: sizeBlock.getHeightSize(20),
            }}
          />

          <View style={loginStyle.footer}>
            <View style={loginStyle.remember}>
              <CheckBoxComponent
                checked={remember}
                onPress={() => {
                  setRemember(!remember);
                }}
              />
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Remember Me
              </CustomText>
            </View>

            <Pressable
              onPress={() => {
                navigation.navigate('ForgotPasswordScreen');
              }}>
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Forgot Password?
              </CustomText>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
