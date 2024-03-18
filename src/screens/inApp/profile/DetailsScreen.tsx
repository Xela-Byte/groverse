import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import {detailsStyle} from '../../../styles/DetailsStyle';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {DetailsScreenProps} from '../../../types/navigation/ProfileNavigationType';
import CustomText from '../../../components/text/CustomText';
import {appColors, fontSize} from '../../../styles/UniversalStyle';
import Icon from 'react-native-vector-icons/Entypo';

const DetailsScreen = ({navigation}: DetailsScreenProps) => {
  return (
    <SafeAreaView style={detailsStyle.container}>
      <View style={detailsStyle.content}>
        <HeaderComponent
          title="General Details"
          showIcon={false}
          navigation={navigation}
        />

        <View style={detailsStyle.tabContainer}>
          <View style={detailsStyle.tabContent}>
            <View style={detailsStyle.tabIcon}>
              <Icon
                name={'user'}
                style={{
                  color: appColors.green,
                  fontSize: fontSize.medium - 5,
                }}
              />
            </View>

            <View>
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Full Name
              </CustomText>
              <CustomText color={appColors.white}>Xela Oladipupo</CustomText>
            </View>
          </View>
          <View style={detailsStyle.tabContent}>
            <View style={detailsStyle.tabIcon}>
              <Icon
                name={'mail'}
                style={{
                  color: appColors.green,
                  fontSize: fontSize.medium - 5,
                }}
              />
            </View>

            <View>
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Email
              </CustomText>
              <CustomText color={appColors.white}>
                xelaoladipupo@gmail.com
              </CustomText>
            </View>
          </View>
          <View style={detailsStyle.tabContent}>
            <View style={detailsStyle.tabIcon}>
              <Icon
                name={'dial-pad'}
                style={{
                  color: appColors.green,
                  fontSize: fontSize.medium - 5,
                }}
              />
            </View>

            <View>
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Phone Number
              </CustomText>
              <CustomText color={appColors.white}>+234 704 8766 211</CustomText>
            </View>
          </View>
          <View style={detailsStyle.tabContent}>
            <View style={detailsStyle.tabIcon}>
              <Icon
                name={'location-pin'}
                style={{
                  color: appColors.green,
                  fontSize: fontSize.medium - 5,
                }}
              />
            </View>

            <View>
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Store Location
              </CustomText>
              <CustomText color={appColors.white}>Aimushu L.G.A</CustomText>
            </View>
          </View>
          <View style={detailsStyle.tabContent}>
            <View style={detailsStyle.tabIcon}>
              <Icon
                name={'eye-with-line'}
                style={{
                  color: appColors.green,
                  fontSize: fontSize.medium - 5,
                }}
              />
            </View>

            <View>
              <CustomText fontSize={fontSize.primary} color={appColors.gray}>
                Password
              </CustomText>
              <CustomText color={appColors.white}>********</CustomText>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
