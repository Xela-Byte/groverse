import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import Clipboard from '@react-native-clipboard/clipboard';
import {Pressable, SafeAreaView, ToastAndroid, View} from 'react-native';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';
import InfoIcon from 'react-native-vector-icons/Entypo';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {receiveStyle} from '../../../styles/ReceiveStyle';
import {
  appColors,
  borderRadius,
  fontSize,
  screenWidth,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {ReceiveScreenProps} from '../../../types/navigation/WalletNavigationType';

const ReceiveScreen = ({navigation}: ReceiveScreenProps) => {
  let qrCodeRef: any;

  const copyAddress = (value: string) => {
    Clipboard.setString(value);
  };
  const saveToGallery = () => {
    qrCodeRef.toDataURL((data: any) => {
      RNFS.writeFile(
        RNFS.PicturesDirectoryPath + `/torongn-address.png`,
        data,
        'base64',
      )
        .then(success => {
          return CameraRoll.save(
            RNFS.PicturesDirectoryPath + `/torongn-address.png`,
            {
              type: 'photo',
            },
          );
        })
        .then(() => {
          ToastAndroid.show(
            `Your QR Code is saved at ${RNFS.PicturesDirectoryPath}`,
            ToastAndroid.SHORT,
          );
        })
        .catch(() => {
          ToastAndroid.show(
            `Error generating QR Code image.`,
            ToastAndroid.SHORT,
          );
        });
    });
  };
  return (
    <SafeAreaView style={receiveStyle.container}>
      <View style={receiveStyle.content}>
        <HeaderComponent
          title="Receive ToroNet Naira (ToroNGN)"
          navigation={navigation}
          showIcon={false}
        />
        <View style={receiveStyle.infoContainer}>
          <InfoIcon
            name="info-with-circle"
            size={fontSize.small}
            color={appColors.black}
          />
          <CustomText fontType="medium" fontSize={fontSize.primary}>
            Only Send ToroNet (Toro) assets to the address. Other assets will be
            lost forever.
          </CustomText>
        </View>
        <View style={receiveStyle.infoContainer}>
          <InfoIcon
            name="info-with-circle"
            size={fontSize.small}
            color={appColors.black}
          />
          <CustomText fontType="medium" fontSize={fontSize.primary}>
            Press to copy address. Long Press to save Qr code to gallery.
          </CustomText>
        </View>
        <Pressable
          onPress={() => {
            copyAddress('0x00000000219ab540356cbb839cbe05303d7705fa');
          }}
          onLongPress={() => {
            saveToGallery();
          }}
          style={receiveStyle.qrCodeContent}>
          <QRCode
            size={screenWidth - sizeBlock.getWidthSize(40)}
            value={'0x00000000219ab540356cbb839cbe05303d7705fa'}
            quietZone={20}
            getRef={c => {
              qrCodeRef = c;
            }}
          />
        </Pressable>
        <View
          style={{
            backgroundColor: appColors.white,
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 10,
            borderRadius: borderRadius.small,
          }}>
          <CustomText
            fontSize={fontSize.primary}
            fontType="semiBold"
            customStyle={{textAlign: 'center'}}>
            0x00000000219ab540356cbb839cbe05303d7705fa
          </CustomText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReceiveScreen;
