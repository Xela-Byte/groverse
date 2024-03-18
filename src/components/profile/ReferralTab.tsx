import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import RewardHistoryTab from './RewardHistoryTab';
import RewardProfileTab from './RewardProfileTab';

const Tab = createMaterialTopTabNavigator();

const ReferralTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        lazy: true,
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          width: '100%',
        },
        tabBarIndicatorStyle: {
          backgroundColor: appColors.green,
          alignSelf: 'center',
          height: sizeBlock.getHeightSize(3),
          borderRadius: borderRadius.small,
        },
        tabBarLabelStyle: {
          fontSize: fontSize.small,
          lineHeight: sizeBlock.getHeightSize(20),
          fontFamily: fontFamily.medium,
          textTransform: 'capitalize',
        },
        tabBarPressColor: 'transparent',
        tabBarPressOpacity: 1,
        tabBarActiveTintColor: appColors.green,
        tabBarInactiveTintColor: appColors.white,
      })}>
      <Tab.Screen name="Reward Profile" component={RewardProfileTab} />
      <Tab.Screen name="Reward History" component={RewardHistoryTab} />
    </Tab.Navigator>
  );
};

export default ReferralTab;
