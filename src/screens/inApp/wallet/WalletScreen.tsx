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
import {WalletScreenProps} from '../../../types/navigation/WalletNavigationType';

const WalletScreen = ({navigation}: WalletScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <SafeAreaView style={walletStyle.container}>
      <View style={walletStyle.content}>
        <HeaderComponent
          title="Wallet"
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

        <View style={walletStyle.walletAction}>
          <View style={walletStyle.walletButton}>
            <CustomButton
              iconName="receive"
              textSize={fontSize.medium}
              textColor={appColors.white}
              customViewStyle={{
                width: sizeBlock.getWidthSize(50),
                borderRadius: borderRadius.small,
                backgroundColor: appColors.gray,
              }}
              onPress={() => {
                navigation.navigate('ReceiveScreen');
              }}
              title=""
            />
            <CustomText fontSize={fontSize.primary} color={appColors.white}>
              Receive
            </CustomText>
          </View>
          <View style={walletStyle.walletButton}>
            <CustomButton
              iconName="send"
              textSize={fontSize.medium}
              textColor={appColors.white}
              customViewStyle={{
                width: sizeBlock.getWidthSize(50),
                borderRadius: borderRadius.small,
                backgroundColor: appColors.gray,
              }}
              onPress={() => {
                navigation.navigate('SendScreen');
              }}
              title=""
            />
            <CustomText fontSize={fontSize.primary} color={appColors.white}>
              Send
            </CustomText>
          </View>
          <View style={walletStyle.walletButton}>
            <CustomButton
              iconName="topUp"
              textSize={fontSize.medium}
              textColor={appColors.white}
              customViewStyle={{
                width: sizeBlock.getWidthSize(50),
                borderRadius: borderRadius.small,
                backgroundColor: appColors.gray,
              }}
              onPress={() => {}}
              title=""
            />
            <CustomText fontSize={fontSize.primary} color={appColors.white}>
              Top Up
            </CustomText>
          </View>
        </View>

        <CustomText
          fontType="medium"
          fontSize={fontSize.medium - 5}
          color={appColors.white}>
          Transaction History
        </CustomText>

        <ScrollView style={{height: screenHeight / 4}}>
          <View style={walletStyle.historyTab}>
            <View>
              <CustomText
                fontType="medium"
                fontSize={fontSize.small}
                color={appColors.white}>
                Withdraw
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                Solar Payment
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                2024-01-01 07:12 PM
              </CustomText>
            </View>
            <CustomText
              fontType="medium"
              fontSize={fontSize.medium - 5}
              color={'tomato'}>
              -5,000
            </CustomText>
          </View>

          <View style={walletStyle.historyTab}>
            <View>
              <CustomText
                fontType="medium"
                fontSize={fontSize.small}
                color={appColors.white}>
                Deposit
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                Narration
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                2024-01-01 07:12 PM
              </CustomText>
            </View>
            <CustomText
              fontType="medium"
              fontSize={fontSize.medium - 5}
              color={appColors.green}>
              -5,000
            </CustomText>
          </View>
          <View style={walletStyle.historyTab}>
            <View>
              <CustomText
                fontType="medium"
                fontSize={fontSize.small}
                color={appColors.white}>
                Withdraw
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                Solar Payment
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                2024-01-01 07:12 PM
              </CustomText>
            </View>
            <CustomText
              fontType="medium"
              fontSize={fontSize.medium - 5}
              color={'tomato'}>
              -5,000
            </CustomText>
          </View>

          <View style={walletStyle.historyTab}>
            <View>
              <CustomText
                fontType="medium"
                fontSize={fontSize.small}
                color={appColors.white}>
                Deposit
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                Narration
              </CustomText>
              <CustomText
                fontType="light"
                fontSize={fontSize.primary}
                color={appColors.gray}>
                2024-01-01 07:12 PM
              </CustomText>
            </View>
            <CustomText
              fontType="medium"
              fontSize={fontSize.medium - 5}
              color={appColors.green}>
              -5,000
            </CustomText>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
