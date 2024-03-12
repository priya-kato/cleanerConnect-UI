import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';

export default function RenderChatView({item}) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: item.type === 'receive' ? 'flex-start' : 'flex-end',
        paddingHorizontal: 10,
      }}>
      {item.type === 'receive' ? (
        <View
          style={{
            height: 20,
            marginVertical: 20,
            backgroundColor: '#5F093D',
            width: '65%',
            height: 40,
            borderRadius: 15,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
            }}>
            {item.text}
          </Text>
        </View>
      ) : (
        <View
          style={{
            height: 20,
            marginVertical: 20,
            backgroundColor: '#FDBCFD',
            width: '65%',
            height: 40,
            borderRadius: 15,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
            }}>
            {item.text}
          </Text>
        </View>
      )}
    </View>
  );
}
