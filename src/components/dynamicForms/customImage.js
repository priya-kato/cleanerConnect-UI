import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {verticalScale, moderateScale} from 'react-native-size-matters';

const CustomImage = ({uri, src, imagestyle}) => {
  return (
    <View>
      {uri ? (
        <FastImage
          style={[
            {
              height: moderateScale(60),
              width: moderateScale(60),
              borderRadius: moderateScale(8),
            },
            imagestyle,
          ]}
          source={{
            uri: 'https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg',
          }}
          resizeMode="cover"
        />
      ) : (
        <FastImage
          style={[
            {
              height: moderateScale(60),
              width: moderateScale(60),
              borderRadius: moderateScale(50),
            },
            imagestyle,
          ]}
          source={src}
        />
      )}
    </View>
  );
};

export default CustomImage;
