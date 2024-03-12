import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../../components/assets/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import {ANIMATIONS} from '../../../components/animations';

export default function SplashScreen({navigation}) {
  const getIsValidUser = async () => {
    try {
      const getUser = await AsyncStorage.getItem('authuser');
      return getUser;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  const fetchData = async () => {
    try {
      const getUser = await getIsValidUser();
      if (getUser) {
        navigation.navigate('private');
      } else {
        navigation.navigate('public');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LottieView
        source={ANIMATIONS.splash}
        autoPlay
        loop={true}
        duration={2000}
        style={{
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
}
