import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color';
import {verticalScale, moderateScale} from 'react-native-size-matters';

const CustomButton = ({
  children,
  height,
  width,
  color,
  buttonTitle,
  buttonStyle,
  textStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle, {...rest}]}
      {...rest}>
      {children || (
        <Text style={[styles.buttonText, textStyle]}>{buttonTitle}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: verticalScale(50),
    width: '100%',
    marginTop: 10,
    backgroundColor: COLORS.primary,
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff',
  },
});
