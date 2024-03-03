import {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import ClipboardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EyeIcon from '../../../assets/svgs/EyeIcon';
import CustomButton from '../../../components/button/CustomButton';
import HeaderComponent from '../../../components/header/HeaderComponent';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {walletStyle} from '../../../styles/WalletStyle';
import {SendScreenProps} from '../../../types/navigation/WalletNavigationType';
import {useForm} from 'react-hook-form';
import CustomInput from '../../../components/input/CustomInput';
import ConfirmTransferTab from '../../../components/wallet/ConfirmTransferTab';

type FormValues = {};

const SendScreen = ({navigation}: SendScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {control, handleSubmit} = useForm<FormValues>();

  const [showBottomTab, setShowBottomTab] = useState<boolean>(false);

  return (
    <>
      {/* <SafeAreaView style={walletStyle.container}>
        <View style={walletStyle.content}>
          <HeaderComponent
            title="Transfer Funds"
            navigation={navigation}
            showIcon={false}
          />
          <View style={walletStyle.walletContainer}>
            <View style={walletStyle.avatarContainer}>
              <Icon
                name="person"
                size={fontSize.medium}
                color={appColors.black}
              />
            </View>
            <View style={walletStyle.balanceText}>
              <CustomText
                fontType="medium"
                color={appColors.white}
                customStyle={{textAlign: 'center'}}>
                Current Balance
              </CustomText>
              <EyeIcon
                onPress={() => setShowPassword(!showPassword)}
                style={{
                  width: fontSize.small,
                  transform: showPassword
                    ? [{rotate: '180deg'}]
                    : [{rotate: '0deg'}],
                }}
              />
            </View>
            <CustomText
              customStyle={{textAlign: 'center'}}
              fontSize={fontSize.medium}
              fontType="semiBold"
              color={appColors.white}>
              ₦ 80,000.00
            </CustomText>
            <View style={walletStyle.addressText}>
              <CustomText
                customStyle={{
                  textAlign: 'center',
                  marginTop: 10,
                }}
                fontSize={fontSize.primary}
                fontType="medium"
                numLine={1}
                ellipsizeMode="middle"
                color={appColors.gray}>
                0x7676764646746574554
              </CustomText>
              <ClipboardIcon
                name="clipboard-multiple-outline"
                color={appColors.gray}
                size={fontSize.small}
              />
            </View>
          </View>

          <CustomInput
            iconName="dial-pad"
            control={control}
            name="amount"
            placeholder="Enter amount"
            rules={{
              required: 'Please enter amount',
            }}
            keyboardType="numeric"
            customStyle={{
              marginTop: sizeBlock.getHeightSize(50),
            }}
          />

          <CustomInput
            iconName="wallet"
            control={control}
            name="wallet"
            placeholder="Enter receiver's address"
            rules={{
              required: `Please enter receiver's address`,
            }}
            keyboardType="numeric"
          />

          <CustomInput
            iconName="dots-three-horizontal"
            control={control}
            name="narration"
            placeholder="Enter narration"
            rules={{
              required: `Please enter narration`,
            }}
          />

          <CustomButton
            customViewStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}
            onPress={() => {
              setShowBottomTab(true);
            }}
            title="Transfer"
          />
        </View>
      </SafeAreaView> */}

      <ConfirmTransferTab
        navigation={navigation}
        showBottomTab={showBottomTab}
        setShowBottomTab={setShowBottomTab}
      />
    </>
  );
};

export default SendScreen;
