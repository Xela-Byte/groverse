import {View} from 'react-native';
import {bottomTabLinks} from '../../utils/data/BottomTabLink';
import Icon from 'react-native-vector-icons/Ionicons';
import {appColors, fontSize} from '../../styles/UniversalStyle';

type Props = {
  route: string;
  isFocused: boolean;
};

const NavigationIcon = ({isFocused, route}: Props) => {
  const routeName = bottomTabLinks.find(link => {
    return route === link.linkText;
  });

  return (
    <View>
      {isFocused ? (
        <Icon
          name={routeName?.activeLinkIcon ?? ''}
          color={appColors.green}
          size={fontSize.medium}
        />
      ) : (
        <Icon name={routeName?.inactiveLinkIcon ?? ''} size={fontSize.medium} />
      )}
    </View>
  );
};

export default NavigationIcon;
