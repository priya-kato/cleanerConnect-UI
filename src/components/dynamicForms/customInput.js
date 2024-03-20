import {View, TextInput, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {validateEmail, minCharacter} from '../helper/helper';
import {COLORS} from '../assets/color';

const CustomInput = ({value, onChangeText, textStyle, ...rest}) => {
  const [valid, setValid] = useState(true);
  const [char, setChar] = useState('');

  const handleChangeText = text => {
    const isValid = validateEmail(text);
    const isInvalid = minCharacter(text, rest.minlength, rest.placeholder);
    if (rest.emailValidation) {
      if (!isValid) {
        setValid(false);
      } else {
        setValid(true);
        if (rest?.isValid) {
          rest?.isValid(true);
        }
      }
    }
    if (rest.minlength) {
      if (isInvalid) {
        setChar(isInvalid);
      } else {
        setChar('');
        if (rest?.isValid) {
          rest?.isValid(true);
        }
      }
    }

    onChangeText(text);
  };
  return (
    <View>
      <TextInput
        value={value}
        style={[styles.input, {...rest}]}
        onChangeText={handleChangeText}
        placeholderTextColor="black"
        {...rest}
      />
      <View>
        {value.length > 0 && rest.enableOnchange && (
          <Text style={[{color: 'red'}, textStyle]}>
            {!valid && rest.emailValidation ? 'Invalid Email' : char && char}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    height: 60,
  },
});
export default CustomInput;
