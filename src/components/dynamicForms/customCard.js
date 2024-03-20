import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color';

const CustomCard = ({view, children, color, onPress, ...rest}) => {
  return (
    <View>
      {view ? (
        <View style={[style.container, {...rest}]} {...rest}>
          {children}
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={[style.container, {...rest}]}
          {...rest}>
          {children}
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 2,
    paddingVertical: 30,
  },
});

export default CustomCard;
