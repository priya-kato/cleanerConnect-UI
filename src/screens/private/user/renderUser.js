import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';

export default function RenderUser({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ChatScreen', {item: item});
      }}
      style={{
        backgroundColor: COLORS.white,
        marginVertical: 10,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
      }}>
      <Text style={{color: COLORS.primary}}>{item.firstname}</Text>
      <Text style={{color: 'black', top: 8}}>{item.phonenumber}</Text>
    </TouchableOpacity>
  );
}
