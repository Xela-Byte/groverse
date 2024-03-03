import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {SuccessScreenProps} from '../../../types/navigation/CartNavigationType';
import {successStyle} from '../../../styles/SuccessStyle';
import CheckIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import CustomText from '../../../components/text/CustomText';

const SuccessScreen = ({navigation}: SuccessScreenProps) => {
  return (
    <SafeAreaView style={successStyle.container}>
      <View style={successStyle.content}>
        <HeaderComponent
          navigation={navigation}
          title="Application Received"
          showIcon={false}
        />
        <Animatable.View
          animation={'flipInY'}
          style={successStyle.checkContainer}>
          <CheckIcon
            name="check"
            color={appColors.green}
            size={fontSize.large * 2}
          />
        </Animatable.View>
        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            textAlign: 'center',
          }}
          fontSize={fontSize.medium}
          fontType="semiBold"
          color={appColors.white}>
          Successful
        </CustomText>
        <CustomText
          customStyle={{
            marginVertical: sizeBlock.getHeightSize(15),
            textAlign: 'center',
          }}
          color={appColors.white}>
          Request for PAYG of ₦36,000 has been sent successfully.
        </CustomText>
        <CustomText
          customStyle={{
            textAlign: 'center',
          }}
          color={appColors.white}>
          One of our agents will reach out to you to inform you when you’ve been
          accepted to receive the product.
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
