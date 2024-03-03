import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {appColors, fontSize} from '../../styles/UniversalStyle';
import MenuIcon from 'react-native-vector-icons/Entypo';
import CustomText from '../text/CustomText';
import {universalStyle} from '../../styles/UniversalStyle';

type Props = {
  title: string;
  showIcon: boolean;
  navigation: any;
};

const HeaderComponent = ({navigation, showIcon, title}: Props) => {
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left-long"
        size={fontSize.primary + 5}
        color={appColors.white}
        onPress={navigation.goBack}
      />
      <CustomText fontSize={fontSize.primary + 2} color={appColors.white}>
        {title}
      </CustomText>

      <MenuIcon
        name="dots-three-horizontal"
        size={fontSize.primary + 5}
        color={appColors.white}
        style={{
          opacity: showIcon ? 1 : 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...universalStyle.spaceBetween,
  },
});

export default HeaderComponent;
