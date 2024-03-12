import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import React, {memo, useRef, useEffect} from 'react';
const screenWidth = Dimensions.get('screen').width;

const RenderHome = ({item, onpress, index}) => {
  const animatedValue = useRef(
    new Animated.Value(index % 2 === 0 ? -1000 : 1000),
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      delay: index * 50, // Delay each animation
      useNativeDriver: true,
    }).start();
  }, [animatedValue, index]);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#edd7ff',
          height: 180,
          width: '47%',
          borderRadius: 10,
          marginHorizontal: 7,
          marginVertical: 10,
          alignItems: 'center',
          padding: 15,
          justifyContent: 'center',
        },
        {
          transform: [{translateX: animatedValue}],
        },
      ]}>
      <TouchableOpacity testID="home-click-button" onPress={onpress}>
        <Animated.View
        //   style={[{transform: [{rotate}]}]}
        >
          <Image
            style={{
              height: 120,
              width: screenWidth * 0.38,
              borderRadius: 10,
            }}
            source={item.image}
          />
        </Animated.View>

        <Text
          style={[
            {color: 'black', top: 10},
            // {transform: [{translateX: shakeX}]},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(RenderHome);
