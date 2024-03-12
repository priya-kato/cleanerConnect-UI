import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color';
import {BackArrowIcon} from '../vectors';

export default function ChatHeader({headername, navigation}) {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: '10%'}}>
        <BackArrowIcon stroke={COLORS.white} />
      </TouchableOpacity>
      <View style={{width: '80%'}}>
        <Text style={{color: COLORS.white, fontSize: 18}}>{headername}</Text>
      </View>
    </View>
  );
}
