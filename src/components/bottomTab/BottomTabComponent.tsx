import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  appColors,
  fontSize,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import NavigationIcon from './NavigationIcon';
import * as Animatable from 'react-native-animatable';

const BottomTabComponent = ({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) => {
  const blackListScreens: string[] = [
    'ItemDetailScreen',
    'CheckoutScreen',
    'PayAsYouGoScreen',
    'PaymentPlanScreen',
    'SuccessScreen',
    'SendScreen',
    'ConfirmTransferScreen',
    'TransferSuccessScreen',
  ];

  const [activeRouteName, setActiveRouteName] = useState<string | undefined>(
    '',
  );

  useEffect(() => {
    setActiveRouteName(getRouteName(state.routes[state.index]));
  }, [state]);

  const shouldDisplayTabBar =
    activeRouteName === undefined
      ? true
      : activeRouteName && !blackListScreens.includes(activeRouteName);

  const [animate, setAnimate] = useState(false);

  const handlePress = (onPress: () => void) => {
    setAnimate(true);

    // Reset the animation after a short delay
    setTimeout(() => {
      setAnimate(false);
    }, 300); // Adjust the delay as needed

    // Trigger the onPress function
    onPress();
  };

  const bounce = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.8,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <View
      style={[
        styles.container,
        {display: shouldDisplayTabBar ? 'flex' : 'none'},
      ]}>
      {state?.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const activeRoute = getRouteName(route);

        const onPress = () => {
          setActiveRouteName(activeRoute);

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            onPress={() => {
              handlePress(onPress);
            }}
            key={index}>
            <Animatable.View
              duration={300}
              animation={isFocused && animate ? bounce : ''}
              style={styles.linkContainer}>
              <NavigationIcon route={label} isFocused={isFocused} />
              <CustomText
                fontType="semiBold"
                fontSize={fontSize.primary}
                color={isFocused ? appColors.green : appColors.gray}>
                {label}
              </CustomText>
            </Animatable.View>
          </Pressable>
        );
      })}
    </View>
  );
};

const getRouteName = (route: any) => {
  return getFocusedRouteNameFromRoute(route);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.black,
    position: 'absolute',
    width: screenWidth,
    height: sizeBlock.getHeightSize(80),
    bottom: 0,
    ...universalStyle.spaceEvenly,
    elevation: 10,
    shadowColor: appColors.gray,
  },
  linkContainer: {
    width: screenWidth / 3,
    height: sizeBlock.getHeightSize(70),
    ...universalStyle.centering,
    flexDirection: 'column',
    position: 'relative',
    marginTop: sizeBlock.getHeightSize(5),
    rowGap: sizeBlock.getHeightSize(5),
  },
});

export default BottomTabComponent;
