import {Animated, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS} from '../../../components/assets/color';

export default function RenderHistory({item, navigation, index}) {
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      delay: index * 10, // Delay each item's animation
      useNativeDriver: true,
    }).start();
  }, [translateY, index]);
  return (
    <Animated.View
      style={[
        {
          backgroundColor: COLORS.white,
          marginVertical: 10,
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 10,
        },
        {
          transform: [{translateY: translateY}],
        },
      ]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HistoryDetails', {item: item})}>
        <Text style={{color: COLORS.primary, fontSize: 17, fontWeight: '700'}}>
          {item?.name || 'Anonymous'}
        </Text>
        <Text style={{color: 'black', top: 3}}>{item?.homeType}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
