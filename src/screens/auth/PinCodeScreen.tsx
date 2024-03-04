import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  appColors,
  borderRadius,
  fontSize,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import {homeStyle} from '../../styles/HomeStyle';
import {FlatList} from 'react-native';
import {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import DeleteIcon from 'react-native-vector-icons/FontAwesome6';
import FingerPrintIcon from 'react-native-vector-icons/Entypo';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {pinCodeStyle} from '../../styles/pinCodeStyle';
import CustomPressable from '../../components/button/CustomPressable';
import CustomText from '../../components/text/CustomText';
import HeaderComponent from '../../components/header/HeaderComponent';

type Props = {
  navigation: any;
};

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];

type DialPadProps = {
  onPress: (item: (typeof dialPad)[number]) => void;
};

const spacing = sizeBlock.getWidthSize(20);
const pinSpacing = sizeBlock.getWidthSize(10);
const pinLength = 4;
const pinContainerSize = screenWidth / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSize = pinMaxSize - pinSpacing;

const PinCodeScreen = ({navigation}: Props) => {
  const dialPadSize = screenWidth * 0.16;
  const pinLength = 6;
  const [code, setCode] = useState<number[]>([]);
  const rnBiometrics = new ReactNativeBiometrics();

  const biometricAuth = async () => {
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        rnBiometrics
          .simplePrompt({
            promptMessage: 'Please authenticate using your fingerprint.',
            fallbackPromptMessage:
              'FingerPrint Authentication failed. Try setting up or using your pin.',
            cancelButtonText: 'Use Pin Authentication',
          })
          .then(resultObject => {
            const {success} = resultObject;

            if (success) {
              console.log(success);
            } else {
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
      }
    });
  };

  const DialPad = ({onPress}: DialPadProps) => {
    return (
      <FlatList
        numColumns={3}
        data={dialPad}
        style={{flexGrow: 0}}
        scrollEnabled={false}
        columnWrapperStyle={{
          gap: spacing * 2.5,
        }}
        contentContainerStyle={{
          gap: spacing * 1.2,
        }}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({item}) => {
          return (
            <CustomPressable
              onPress={() => {
                item !== '' ? onPress(item) : biometricAuth();
              }}>
              <View
                style={{
                  width: dialPadSize,
                  height: dialPadSize,
                  borderRadius: dialPadSize,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item === 'del' ? (
                  <DeleteIcon
                    name="delete-left"
                    color={appColors.white}
                    size={fontSize.large - 20}
                  />
                ) : item === '' ? (
                  <FingerPrintIcon
                    name="fingerprint"
                    color={appColors.white}
                    size={fontSize.large - 20}
                  />
                ) : (
                  <CustomText
                    fontType="semiBold"
                    fontSize={fontSize.large - 10}
                    color={appColors.white}>
                    {item}
                  </CustomText>
                )}
              </View>
            </CustomPressable>
          );
        }}
      />
    );
  };
  return (
    <View style={pinCodeStyle.container}>
      <View style={pinCodeStyle.content}>
        <HeaderComponent
          title="Confirm Transaction"
          navigation={navigation}
          showIcon={false}
        />

        <View style={pinCodeStyle.avatarContainer}>
          <Icon name="person" size={fontSize.large} color={appColors.black} />
        </View>

        <View style={pinCodeStyle.text}>
          <CustomText color={appColors.white}>Passcode</CustomText>
        </View>

        <View style={pinCodeStyle.padContainer}>
          <Animatable.View style={pinCodeStyle.pinContent}>
            {[...Array(pinLength).keys()].map(i => {
              const isSelected = !!code[i];
              return (
                <Animatable.View
                  key={`pin-${i}`}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: isSelected
                      ? appColors.green
                      : appColors.gray,
                    ...universalStyle.centering,
                    borderRadius: borderRadius.full,
                  }}
                  animation={isSelected ? 'bounce' : ''}
                />
              );
            })}
          </Animatable.View>
          <DialPad
            onPress={item => {
              if (item === 'del') {
                setCode(code.slice(0, code.length - 1));
              } else if (typeof item === 'number') {
                if (code.length === pinLength) return;
                setCode([...code, item]);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PinCodeScreen;
