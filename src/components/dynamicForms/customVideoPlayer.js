import React, {useRef, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';

const CustomVideo = ({route}) => {
  const {src} = route?.params;
  const videoRef = useRef(null);
  const [pic, setPic] = useState(false);
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{
          uri: src,
          //   uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
        pictureInPicture={pic}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  rewindButton: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  rewindButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  rewindButton2: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  rewindButtonText2: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CustomVideo;
