import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color';
import {SendIcon} from '../vectors';

export default function ChatTextInput({
  labelValue,
  placeholderText,
  sendClick,
  ...rest
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        height: 70,
        backgroundColor: COLORS.backgroundColor,
      }}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        color={COLORS.primary}
        cursorColor={COLORS.primary}
        {...rest}
      />
      <TouchableOpacity
        onPress={sendClick}
        style={{
          height: 45,
          width: 45,
          backgroundColor: COLORS.primary,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    width: '85%',
    height: 45,
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
