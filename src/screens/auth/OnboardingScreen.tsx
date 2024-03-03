import {StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import CustomText from '../../components/text/CustomText';
import {onboardingStyle} from '../../styles/OnboardingStyle';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import {OnboardingScreenProps} from '../../types/navigation/AuthNavigationType';
import {
  OnboardingDataType,
  onboardingData,
} from '../../utils/data/OnboardingData';
import {useState} from 'react';
import CustomButton from '../../components/button/CustomButton';
import TransparentButton from '../../components/button/TransparentButton';
import useBackHandler from '../../utils/hooks/useBackhandler';
import * as Animatable from 'react-native-animatable';

type Props = {
  item: OnboardingDataType;
};

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const [onboardingDone, setOnboardingDone] = useState<boolean>(false);
  const keyExtractor = (item: OnboardingDataType) => item.key;

  const renderItem = ({item}: Props) => {
    return (
      <View style={onboardingStyle.container}>
        <FastImage
          source={require('../../assets/pngs/groverseFull.png')}
          style={onboardingStyle.logo}
          resizeMode="contain"
        />
        <FastImage source={item.image} style={onboardingStyle.image} />
        <View style={onboardingStyle.textContainer}>
          <CustomText
            fontType="semiBold"
            fontSize={fontSize.medium - 5}
            color={appColors.white}>
            {item.title}
          </CustomText>
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={[styles.container]}>
        <CustomText fontType="medium" color={appColors.black}>
          Next
        </CustomText>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={[styles.outlinedContainer]}>
        <CustomText fontType="medium" color={appColors.white}>
          Skip
        </CustomText>
      </View>
    );
  };

  const renderDoneButton = () => {
    return <CustomText>Done</CustomText>;
  };

  return (
    <>
      {onboardingDone ? (
        <Animatable.View
          animation={'fadeIn'}
          duration={300}
          style={onboardingStyle.authContainer}>
          <FastImage
            source={require('../../assets/jpgs/onboarding-2.jpg')}
            style={onboardingStyle.authBackground}
          />
          <FastImage
            resizeMode="contain"
            source={require('../../assets/pngs/groverseFull.png')}
            style={onboardingStyle.authLogo}
          />
          <View style={onboardingStyle.buttonStyle}>
            <CustomButton
              title="SIGN IN"
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
            <TransparentButton
              title="GET STARTED"
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}
            />
          </View>
        </Animatable.View>
      ) : (
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          dotStyle={onboardingStyle.dotStyle}
          activeDotStyle={onboardingStyle.activeDotStyle}
          renderDoneButton={renderDoneButton}
          renderSkipButton={renderSkipButton}
          renderNextButton={renderNextButton}
          showSkipButton
          data={onboardingData}
          onEndReached={() => {
            setOnboardingDone(true);
          }}
          onDone={() => {
            setOnboardingDone(true);
          }}
        />
      )}
    </>
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
  outlinedContainer: {
    width: '85%',
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: appColors.green,
    ...universalStyle.centering,
    columnGap: sizeBlock.getWidthSize(10),
  },
});

export default OnboardingScreen;
