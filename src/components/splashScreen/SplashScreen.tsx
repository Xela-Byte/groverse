import React, {useEffect, useRef, useState} from 'react';
import {Animated, StatusBar, StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import {
  appColors,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import RadialBackground from '../background/RadialBackground';

export function WithSplashScreen({
  children,
  isAppReady,
}: {
  isAppReady: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {isAppReady ? children : null}
      <Splash isAppReady={isAppReady} />
    </>
  );
}

const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

export const Splash = ({isAppReady}: {isAppReady: boolean}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;

  const [state, setState] = useState<
    typeof WAIT_FOR_APP_TO_BE_READY | typeof FADE_OUT | typeof HIDDEN
  >(WAIT_FOR_APP_TO_BE_READY);

  const [isSplashScreenDone, setIsSplashScreenDone] = useState<boolean>(false);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  // useEffect(() => {
  //   if (state === FADE_OUT) {
  //     Animated.timing(containerOpacity, {
  //       toValue: 0,
  //       duration: 2000, // Fade out duration
  //       delay: 2000, // Minimum time the logo will stay visible
  //       useNativeDriver: true,
  //     }).start(() => {
  //       setState(HIDDEN);
  //     });
  //   }
  // }, [containerOpacity, state]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setState(HIDDEN);
    }, 3500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [state]);

  const onAnimationDone = () => {
    setTimeout(() => {
      setIsSplashScreenDone(!isSplashScreenDone);
    }, 500);
  };

  const customAnimation = {
    0: {
      opacity: 0,
      top: 0,
      scale: 1,
    },
    0.25: {
      opacity: 0.25,
      top: -sizeBlock.getHeightSize(120),
      scale: 1.5,
    },
    0.5: {
      opacity: 0.5,
      top: -sizeBlock.getHeightSize(130),
      scale: 5,
    },
    0.75: {
      opacity: 0.75,
      top: -sizeBlock.getHeightSize(140),
      scale: 7,
    },
    1: {
      opacity: 1,
      top: -sizeBlock.getHeightSize(150),
      scale: screenWidth,
    },
  };

  return (
    <Animated.View
      collapsable={false}
      style={[
        style.container,
        {
          opacity: containerOpacity,
          display: state === HIDDEN ? 'none' : 'flex',
        },
      ]}>
      <StatusBar backgroundColor={appColors.black} />
      <View style={style.subContainer}>
        <Animatable.View
          duration={4000}
          animation={customAnimation}
          style={style.lightContainer}>
          <RadialBackground customViewStyle={style.lightContent} />
        </Animatable.View>
        <FastImage
          source={require('../../assets/pngs/groverseFull.png')}
          style={style.logo}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: appColors.black,
  },
  subContainer: {
    width: '100%',
    height: '100%',
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  lightContainer: {
    position: 'absolute',
    top: -sizeBlock.getHeightSize(45),
    left: sizeBlock.getWidthSize(20),
  },
  lightContent: {},
  logo: {
    width: screenWidth / 1.5,
    height: screenWidth / 1.5,
  },
});
