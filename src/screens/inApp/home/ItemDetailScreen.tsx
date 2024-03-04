import React from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import HeaderComponent from '../../../components/header/HeaderComponent';
import {itemDetailStyle} from '../../../styles/ItemDetailStyle';
import {ItemDetailScreenProps} from '../../../types/navigation/HomeNavigationType';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import BatteryIcon from 'react-native-vector-icons/Ionicons';
import PanelIcon from 'react-native-vector-icons/FontAwesome5';
import PlugIcon from 'react-native-vector-icons/Entypo';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import FlagIcon from 'react-native-vector-icons/FontAwesome';
import ShareIcon from 'react-native-vector-icons/Entypo';
import CustomPressable from '../../../components/button/CustomPressable';
import {homeStyle} from '../../../styles/HomeStyle';
import CustomButton from '../../../components/button/CustomButton';
import {cartStyle} from '../../../styles/CartStyles';

const ItemDetailScreen = ({navigation, route}: ItemDetailScreenProps) => {
  return (
    <SafeAreaView style={itemDetailStyle.container}>
      <ScrollView>
        <View style={itemDetailStyle.content}>
          <HeaderComponent title="Details" navigation={navigation} showIcon />
          <FastImage
            source={require('../../../assets/jpgs/powerBank.jpg')}
            resizeMode="cover"
            style={itemDetailStyle.itemImage}
          />
          <View style={itemDetailStyle.itemDescription}>
            <CustomText
              fontSize={fontSize.medium}
              fontType="semiBold"
              color={appColors.white}>
              Solar Lattern
            </CustomText>
            <CustomText
              customStyle={{
                marginBottom: sizeBlock.getHeightSize(20),
              }}
              fontSize={fontSize.primary}
              color={appColors.white}>
              Solar lettern embodiels an ideal performance of affordability and
              quality, Appreciated for it portability, its suitable for work,
              study, outdoor usage, indoor usage, or travels. Alongside a rubost
              battery life, the solar lattern has a long life one charge power.
            </CustomText>
            <View style={itemDetailStyle.itemSpecification}>
              <BatteryIcon
                name="battery-charging"
                color={appColors.white}
                size={fontSize.medium}
              />
              <CustomText fontSize={fontSize.primary} color={appColors.white}>
                Up to 72 hours life on a single charge.
              </CustomText>
            </View>
            <View style={itemDetailStyle.itemSpecification}>
              <PanelIcon
                name="solar-panel"
                color={appColors.white}
                size={fontSize.small + 5}
              />
              <CustomText fontSize={fontSize.primary} color={appColors.white}>
                In built Solar panel
              </CustomText>
            </View>
            <View style={itemDetailStyle.itemSpecification}>
              <PlugIcon
                name="power-plug"
                color={appColors.white}
                size={fontSize.medium}
              />
              <CustomText fontSize={fontSize.primary} color={appColors.white}>
                Dual charging option
              </CustomText>
            </View>
            <View style={itemDetailStyle.actionContainer}>
              <HeartIcon
                name="hearto"
                color={appColors.white}
                size={fontSize.medium}
              />
              <FlagIcon
                name="flag-o"
                color={appColors.white}
                size={fontSize.medium}
              />
              <ShareIcon
                name="share-alternative"
                color={appColors.white}
                size={fontSize.medium}
              />
            </View>
            <View style={itemDetailStyle.itemViews}>
              <CustomText
                fontSize={fontSize.small}
                fontType="medium"
                color={appColors.white}>
                Customer also view
              </CustomText>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
              keyExtractor={item => {
                return item.toString();
              }}
              renderItem={({item}) => {
                return (
                  <CustomPressable
                    customViewStyle={itemDetailStyle.itemContainer}
                    onPress={() => {
                      navigation.navigate('ItemDetailScreen', {
                        itemID: item.toString(),
                      });
                    }}>
                    <FastImage
                      source={require('../../../assets/jpgs/powerBank.jpg')}
                      resizeMode="cover"
                      style={itemDetailStyle.itemViewImage}
                    />
                    <View style={itemDetailStyle.itemInfo}>
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
                    </View>
                  </CustomPressable>
                );
              }}
            />
          </View>

          <View style={itemDetailStyle.cartSubAction}>
            <CustomButton
              iconName="cartPlus"
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
            <CustomButton
              iconName="phone"
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
            <CustomButton
              iconName="cartCheckout"
              textColor={appColors.white}
              textSize={fontSize.primary - 2}
              customViewStyle={{
                width: '90%',
                borderRadius: borderRadius.small,
                paddingRight: 5,
              }}
              onPress={() => {}}
              title="Add to cart"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;
