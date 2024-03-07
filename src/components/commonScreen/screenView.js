import {View, Animated, Dimensions} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {COLORS} from '../assets/color';
export default function ScreenView({children}) {
  const translateY = useRef(new Animated.Value(500)).current;
  const screenHeight = Dimensions.get('screen').height;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 10,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={[
        {
          height: screenHeight * 0.7,
          backgroundColor: COLORS.backgroundColor,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        {transform: [{translateY}]},
      ]}>
      {children}
    </Animated.View>
  );
}
