import {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Searchbar} from 'react-native-paper';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Fontisto';
import CustomPressable from '../../../components/button/CustomPressable';
import CustomText from '../../../components/text/CustomText';
import {homeStyle} from '../../../styles/HomeStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {HomeScreenProps} from '../../../types/navigation/HomeNavigationType';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.content}>
        <View style={homeStyle.avatarContainer}>
          <Icon name="person" size={fontSize.medium} color={appColors.black} />
        </View>

        <Searchbar
          placeholder="Input device serial number"
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor={appColors.gray}
          placeholderTextColor={appColors.gray}
          inputStyle={homeStyle.searchBarInput}
          cursorColor={appColors.black}
          selectionColor={appColors.gray}
          style={homeStyle.searchBar}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            paddingTop: 30,
            gap: 10,
          }}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
          numColumns={2}
          keyExtractor={item => {
            return item.toString();
          }}
          renderItem={({item}) => {
            return (
              <CustomPressable
                customViewStyle={homeStyle.itemContainer}
                onPress={() => {
                  navigation.navigate('ItemDetailScreen', {
                    itemID: item.toString(),
                  });
                }}>
                <FastImage
                  source={require('../../../assets/jpgs/powerBank.jpg')}
                  resizeMode="cover"
                  style={homeStyle.itemImage}
                />
                <View style={homeStyle.itemInfo}>
                  <View style={{padding: sizeBlock.getHeightSize(5)}}>
                    <CustomText
                      numLine={1}
                      fontSize={fontSize.primary}
                      color={appColors.white}>
                      Oraimo 40,000mmah
                    </CustomText>
                    <CustomText
                      fontSize={fontSize.primary}
                      color={appColors.white}>
                      ₦ 80,000
                    </CustomText>
                  </View>
                  <MenuIcon
                    name="dots-three-vertical"
                    color={appColors.white}
                    size={fontSize.primary}
                  />
                </View>
              </CustomPressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
