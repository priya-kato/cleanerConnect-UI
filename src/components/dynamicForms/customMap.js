import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const CustomMap = () => {
  const [initialPosition, setInitialPosition] = useState(null);
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      console.log(latitude);
      setInitialPosition({latitude, longitude});
    });
  };
  useEffect(() => {
    getCurrentPosition();
  }, [initialPosition]);

  return (
    <View style={{flex: 1}}>
      {initialPosition && (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: initialPosition.latitude,
            longitude: initialPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
            }}
            title="Current Location"
            description="This is your current location"
          />
        </MapView>
      )}
    </View>
  );
};

export default CustomMap;
