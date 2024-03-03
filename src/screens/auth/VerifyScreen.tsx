import {SafeAreaView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/button/CustomButton';
import OutlinedButton from '../../components/button/OutlinedButton';
import CustomText from '../../components/text/CustomText';
import {loginStyle} from '../../styles/LoginStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {VerifyScreenProps} from '../../types/navigation/AuthNavigationType';
import {verifyStyle} from '../../styles/VerifyStyle';

const VerifyScreen = (props: VerifyScreenProps) => {
  return (
    <SafeAreaView style={verifyStyle.container}>
      <FastImage
        source={require('../../assets/pngs/groverseFull.png')}
        style={verifyStyle.logo}
        resizeMode="contain"
      />
      <View style={verifyStyle.content}>
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
              You have to verify your email to continue.
            </CustomText>
          </Animatable.View>
        </View>

        <CustomText
          customStyle={{
            textAlign: 'center',
            marginVertical: sizeBlock.getHeightSize(50),
          }}
          color={appColors.white}
          fontSize={fontSize.small}>
          Kindly go to your mail app and click the link sent there.
        </CustomText>

        <CustomButton onPress={() => {}} title="Open Mail App" />

        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(40),
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          color={appColors.white}
          fontSize={fontSize.small}>
          Didn't get the link?
        </CustomText>

        <OutlinedButton onPress={() => {}} title="Resend verification mail" />
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;
