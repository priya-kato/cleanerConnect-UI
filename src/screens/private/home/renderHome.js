import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import React, {memo} from 'react';
const screenWidth = Dimensions.get('screen').width;

const RenderHome = ({item, onpress}) => {
  return (
    <TouchableOpacity
      onPress={() => onpress(item)}
      style={{
        backgroundColor: '#edd7ff',
        height: 180,
        width: '47%',
        borderRadius: 10,
        marginHorizontal: 7,
        marginVertical: 10,
        alignItems: 'center',
        padding: 15,
        justifyContent: 'center',
      }}>
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
  );
};

export default memo(RenderHome);
