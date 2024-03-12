import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Vibration,
} from 'react-native';
import React, {useRef, useEffect, memo} from 'react';
import MainFormInput from '../../../components/mainForm/mainInput';
import {COLORS} from '../../../components/assets/color';
const ListItem = ({item, index, animation}) => {
  console.log(item, 'listitemI');
  const animatedValue = useRef(
    new Animated.Value(animation === 'left' ? -1000 : 1000),
    // new Animated.Value(-1000),
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      delay: index * 50, // Delay each animation
      useNativeDriver: true,
    }).start();
  }, [animatedValue, index, animation]);

  return (
    <Animated.View
      style={[
        styles.listItemContainer,
        {
          transform: [{translateX: animatedValue}],
        },
      ]}>
      <MainFormInput
        labelValue={item.value}
        placeholderText={item.placeholderText}
        onChangeText={item.onchange}
        inputMode={item.input}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dropdown: {
    // margin: 16,
    height: 55,
    borderBottomColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderColor: COLORS.primary,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default memo(ListItem);
