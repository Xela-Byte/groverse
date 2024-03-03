import {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {appColors, borderRadius, sizeBlock} from '../../styles/UniversalStyle';

type Props = {
  checked: boolean;
  onPress: () => void;
};

const CheckBoxComponent = ({checked, onPress}: Props) => {
  const [animate, setAnimate] = useState<boolean>(false);

  const handlePress = () => {
    setAnimate(true);

    // Reset the animation after a short delay
    setTimeout(() => {
      setAnimate(false);
    }, 300); // Adjust the delay as needed

    // Trigger the onPress function
    onPress();
  };

  const bounce = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.8,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <Animatable.View duration={300} animation={animate ? bounce : ''}>
      <Pressable
        style={[
          styles.container,
          {
            borderColor: checked ? appColors.green : appColors.gray,
          },
        ]}
        onPress={handlePress}>
        {checked && <View style={styles.circle} />}
      </Pressable>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizeBlock.getWidthSize(20),
    height: sizeBlock.getWidthSize(20),
    borderColor: appColors.gray,
    borderWidth: 2,
    borderRadius: borderRadius.full,
  },
  circle: {
    width: sizeBlock.getWidthSize(10),
    height: sizeBlock.getWidthSize(10),
    marginTop: sizeBlock.getWidthSize(10) / 3,
    marginLeft: sizeBlock.getWidthSize(10) / 3.5,
    borderRadius: borderRadius.full,
    backgroundColor: appColors.green,
  },
});

export default CheckBoxComponent;
