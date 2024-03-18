import {View, Text} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {EditScreenProps} from '../../../types/navigation/ProfileNavigationType';
import {SafeAreaView} from 'react-native';
import {editStyle} from '../../../styles/EditStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import Icon from 'react-native-vector-icons/Fontisto';
import CustomInput from '../../../components/input/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../../components/button/CustomButton';

type FormValues = {};

const EditScreen = ({navigation}: EditScreenProps) => {
  const {control, handleSubmit, watch} = useForm<FormValues>();
  return (
    <SafeAreaView style={editStyle.container}>
      <View style={editStyle.content}>
        <HeaderComponent
          title="Edit Profile"
          showIcon={false}
          navigation={navigation}
        />
        <View style={editStyle.avatarWrapper}>
          <View style={editStyle.avatarContainer}>
            <Icon name="person" size={fontSize.large} color={appColors.black} />
          </View>
          <View style={editStyle.editIcon}>
            <Icon
              name="camera"
              size={fontSize.primary - 5}
              color={appColors.gray}
            />
          </View>
        </View>

        <CustomInput
          iconName="user"
          control={control}
          name="name"
          placeholder="User Name"
          rules={{
            required: 'Please enter name',
            validate: (value: string) => value.length > 4,
          }}
          customStyle={{
            marginTop: sizeBlock.getHeightSize(50),
          }}
        />
        <CustomInput
          iconName="mail"
          control={control}
          name="email"
          placeholder="Email Address"
          editable={false}
          defaultValue={'xelaoladipupo@gmail.com'}
        />

        <CustomInput
          iconName="phone"
          control={control}
          name="phoneNumber"
          placeholder="Phone Number"
        />

        <CustomInput
          iconName="location-pin"
          control={control}
          name="address"
          placeholder="Address"
        />

        <CustomInput
          iconName="location"
          control={control}
          name="state"
          placeholder="State"
        />

        <CustomInput
          iconName="aircraft"
          control={control}
          name="region"
          placeholder="Region"
        />

        <CustomButton
          customViewStyle={{
            marginTop: sizeBlock.getHeightSize(25),
          }}
          onPress={() => {}}
          title="Update Profile"
        />
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
