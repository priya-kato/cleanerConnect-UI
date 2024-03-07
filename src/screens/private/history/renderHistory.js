import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';

export default function RenderHistory({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HistoryDetails', {item: item})}
      style={{
        backgroundColor: COLORS.white,
        marginVertical: 10,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
      }}>
      <Text style={{color: COLORS.primary, fontSize: 17, fontWeight: '700'}}>
        {item?.name || 'Anonymous'}
      </Text>
      <Text style={{color: 'black', top: 3}}>{item?.homeType}</Text>
    </TouchableOpacity>
  );
}
