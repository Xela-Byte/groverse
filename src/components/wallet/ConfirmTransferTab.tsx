import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useCallback, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import {SendScreenProps} from '../../types/navigation/WalletNavigationType';
import useBackHandler from '../../utils/hooks/useBackhandler';
import useHexToRGBA from '../../utils/hooks/useHexToRGBA';
import CustomButton from '../button/CustomButton';
import CustomText from '../text/CustomText';

type Props = {
  showBottomTab: boolean;
  setShowBottomTab: (value: boolean) => void;
  navigation: SendScreenProps['navigation'];
};

const ConfirmTransferTab = ({
  navigation,
  setShowBottomTab,
  showBottomTab,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    return;
  }, []);

  const handlePayment = () => {
    bottomSheetRef.current?.close();
    setShowBottomTab(false);
    navigation.navigate('PinCodeScreen');
  };

  useBackHandler(() => {
    handlePayment();
    return true;
  });

  useEffect(() => {
    showBottomTab === false && bottomSheetRef.current?.close();
    showBottomTab && bottomSheetRef.current?.expand();
  }, [showBottomTab]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.7}
        pressBehavior={'none'}
      />
    ),
    [],
  );
  return (
    <>
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
          backgroundStyle={{
            backgroundColor: appColors.black,
          }}
          handleIndicatorStyle={{
            backgroundColor: appColors.white,
          }}
          snapPoints={['50%']}>
          <BottomSheetView style={styles.contentContainer}>
            <CustomText
              fontSize={fontSize.medium - 5}
              fontType="semiBold"
              color={appColors.white}>
              Confirm Transfer
            </CustomText>
            <CustomText fontSize={fontSize.primary} color={appColors.white}>
              Please confirm your transaction details
            </CustomText>

            <View style={styles.tabContainer}>
              <View style={styles.tabContent}>
                <View style={styles.tabIcon}>
                  <Icon
                    name={'dial-pad'}
                    style={{
                      color: appColors.green,
                      fontSize: fontSize.medium - 5,
                    }}
                  />
                </View>

                <View>
                  <CustomText
                    fontSize={fontSize.primary}
                    color={appColors.gray}>
                    Amount
                  </CustomText>
                  <CustomText color={appColors.white}>₦80,000.00</CustomText>
                </View>
              </View>
              <View style={styles.tabContent}>
                <View style={styles.tabIcon}>
                  <Icon
                    name={'wallet'}
                    style={{
                      color: appColors.green,
                      fontSize: fontSize.medium - 5,
                    }}
                  />
                </View>

                <View style={{width: '80%'}}>
                  <CustomText
                    fontSize={fontSize.primary}
                    color={appColors.gray}>
                    Receiver's address
                  </CustomText>
                  <CustomText
                    numLine={1}
                    ellipsizeMode="middle"
                    color={appColors.white}>
                    n1k9E2Z46Hw6mUzk8sx1suMjPMdRrgRj4o
                  </CustomText>
                </View>
              </View>
              <View style={styles.tabContent}>
                <View style={styles.tabIcon}>
                  <Icon
                    name={'dots-three-horizontal'}
                    style={{
                      color: appColors.green,
                      fontSize: fontSize.medium - 5,
                    }}
                  />
                </View>

                <View>
                  <CustomText
                    fontSize={fontSize.primary}
                    color={appColors.gray}>
                    Narration
                  </CustomText>
                  <CustomText color={appColors.white}>
                    No narration set
                  </CustomText>
                </View>
              </View>
            </View>

            <CustomButton
              customViewStyle={{
                marginTop: sizeBlock.getHeightSize(20),
              }}
              onPress={() => {
                handlePayment();
              }}
              title="Confirm Payment"
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    padding: 24,
    position: 'absolute',
  },
  contentContainer: {
    padding: 20,
    width: screenWidth,
  },
  tabContainer: {
    width: '100%',
    paddingVertical: sizeBlock.getHeightSize(10),
  },
  tabContent: {
    padding: sizeBlock.getHeightSize(10),
    ...universalStyle.verticalCentering,
    columnGap: sizeBlock.getWidthSize(20),
  },
  tabIcon: {
    backgroundColor: useHexToRGBA(appColors.green, 0.2),
    borderRadius: borderRadius.small,
    width: sizeBlock.getWidthSize(40),
    height: sizeBlock.getWidthSize(40),
    ...universalStyle.centering,
  },
});

export default ConfirmTransferTab;
