import {View, Text, SafeAreaView} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {ProfileScreenProps} from '../../../types/navigation/ProfileNavigationType';
import {profileStyle} from '../../../styles/ProfileStyle';
import {appColors, fontSize} from '../../../styles/UniversalStyle';
import Icon from 'react-native-vector-icons/Fontisto';
import PersonIcon from 'react-native-vector-icons/AntDesign';
import CartIcon from 'react-native-vector-icons/Ionicons';
import CustomText from '../../../components/text/CustomText';
import CustomPressable from '../../../components/button/CustomPressable';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  return (
    <SafeAreaView style={profileStyle.container}>
      <View style={profileStyle.content}>
        <HeaderComponent
          navigation={navigation}
          showIcon={false}
          title="Profile"
        />
        <View style={profileStyle.avatarContainer}>
          <Icon name="person" size={fontSize.large} color={appColors.black} />
        </View>

        <View style={profileStyle.tabContainer}>
          <CustomPressable
            onPress={() => {
              navigation.navigate('DetailsScreen');
            }}>
            <View style={profileStyle.tabContent}>
              <PersonIcon
                name="user"
                size={fontSize.medium}
                color={appColors.white}
              />
              <CustomText color={appColors.white}>General Details</CustomText>
            </View>
          </CustomPressable>

          <CustomPressable
            onPress={() => {
              navigation.navigate('EditScreen');
            }}>
            <View style={profileStyle.tabContent}>
              <PersonIcon
                name="adduser"
                size={fontSize.medium}
                color={appColors.white}
              />
              <CustomText color={appColors.white}>Edit Profile</CustomText>
            </View>
          </CustomPressable>

          <CustomPressable
            onPress={() => {
              navigation.navigate('ReferralScreen');
            }}>
            <View style={profileStyle.tabContent}>
              <PersonIcon
                name="gift"
                size={fontSize.medium}
                color={appColors.white}
              />
              <CustomText color={appColors.white}>Referrals</CustomText>
            </View>
          </CustomPressable>

          <View style={profileStyle.tabContent}>
            <CartIcon
              name="cart-outline"
              size={fontSize.medium}
              color={appColors.white}
            />
            <CustomText color={appColors.white}>Become a vendor</CustomText>
          </View>
          <View style={profileStyle.tabContent}>
            <PersonIcon
              name="logout"
              size={fontSize.medium}
              color={appColors.white}
            />
            <CustomText color={appColors.white}>Logout</CustomText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
