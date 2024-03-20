import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../assets/color';

export default function CustomDropDown({data,value,onchange, ...rest}) {
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, {...rest}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        itemTextStyle={{color: COLORS.primary}}
        value={value}
        onChange={onchange}
        {...rest}
      />
    </View>
  );
}

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
