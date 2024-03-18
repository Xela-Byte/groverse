import {SafeAreaView, View} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {referralStyle} from '../../../styles/ReferralStyle';
import {ReferralScreenProps} from '../../../types/navigation/ProfileNavigationType';
import GiftIcon from '../../../assets/svgs/GiftIcon';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import ClipboardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import ReferralTab from '../../../components/profile/ReferralTab';

const ReferralScreen = ({navigation}: ReferralScreenProps) => {
  const confettiRef = useRef<LottieView>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(true);

  const handleShowConfetti = () => {
    confettiRef.current?.play(0);
    setTimeout(() => {
      setShowConfetti(false);
    }, 1500);
  };

  useEffect(() => {
    handleShowConfetti();
  }, []);

  return (
    <SafeAreaView style={referralStyle.container}>
      <View style={referralStyle.content}>
        <HeaderComponent
          title="Referrals"
          showIcon={false}
          navigation={navigation}
        />
        {showConfetti && (
          <LottieView
            ref={confettiRef}
            source={require('../../../assets/animation/confetti.json')}
            autoPlay={false}
            loop={false}
            style={referralStyle.lottie}
            resizeMode="cover"
          />
        )}
        <View style={referralStyle.detailContainer}>
          <GiftIcon />
          <View style={referralStyle.details}>
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingTop: sizeBlock.getHeightSize(50),
            height: screenHeight / 1.5,
          }}>
          <ReferralTab />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReferralScreen;
