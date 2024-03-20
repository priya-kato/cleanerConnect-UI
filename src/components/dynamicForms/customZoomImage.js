//import React in our code
import React from 'react';

//import all the components we are going to use
import {SafeAreaView, StyleSheet, View} from 'react-native';

//import ImageViewer which will help us to zoom Image
import ImageViewer from 'react-native-image-zoom-viewer';

const CustomZoomImage = ({images, rest}) => {
  return (
    <View style={[{...rest}, styles.container]}>
      <ImageViewer imageUrls={images} renderIndicator={() => null} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
});

export default CustomZoomImage;
