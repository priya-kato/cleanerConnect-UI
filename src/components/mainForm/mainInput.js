import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utills/Dimensions';
import {COLORS} from '../assets/color';

export default function MainFormInput({labelValue, placeholderText, ...rest}) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      color="black"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
