import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {windowHeight, windowWidth} from '../utills/Dimensions';
import {COLORS} from '../assets/color';
export default function MainFormButton({buttonTitle, ...rest}) {
  return (
    <TouchableOpacity
      testID="submit-button"
      style={styles.buttonContainer}
      {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 25,
    color: '#ffffff',
  },
});
