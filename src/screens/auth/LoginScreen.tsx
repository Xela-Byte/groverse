import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {loginStyle} from '../../styles/LoginStyle';
import FastImage from 'react-native-fast-image';
import {onboardingStyle} from '../../styles/OnboardingStyle';
import CustomText from '../../components/text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import CustomInput from '../../components/input/CustomInput';
import {useForm} from 'react-hook-form';
import {LoginScreenProps} from '../../types/navigation/AuthNavigationType';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/data/Regex';
import CustomButton from '../../components/button/CustomButton';
import OutlinedButton from '../../components/button/OutlinedButton';
import CheckBoxComponent from '../../components/checkbox/CheckBoxComponent';
import {useState} from 'react';
import * as Animatable from 'react-native-animatable';

type FormValues = {
  email: string;
  password: string;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {control, handleSubmit, watch} = useForm<FormValues>();
  const [remember, setRemember] = useState<boolean>(false);

  const onSignIn = (data: FormValues) => {
    return;
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
              fontSize={fontSize.medium + 10}>
              Welcome Back,{' '}
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
              color={appColors.green}
              fontSize={fontSize.medium + 10}>
              Xela!
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

        <CustomButton
          onPress={() => {
            handleSubmit(onSignIn)();
          }}
          title="SIGN IN"
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

        <CustomText
          customStyle={{
            textAlign: 'center',
            marginBottom: sizeBlock.getHeightSize(10),
          }}
          fontSize={fontSize.primary}
          color={appColors.gray}>
          Or sign in with
        </CustomText>

        <OutlinedButton
          title="Google"
          iconName="google"
          customViewStyle={{
            marginVertical: sizeBlock.getHeightSize(20),
          }}
          onPress={() => {}}
        />
        <OutlinedButton title="Apple" iconName="apple" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
