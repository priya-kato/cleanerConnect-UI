import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
  Animated,
  PermissionsAndroid,
  BackHandler,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useEffect, useState, useCallback} from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
import {IMAGES} from '../../../components/images';
import RenderHome from './renderHome';

const DATA = [
  {
    id: 1,
    name: 'Kutchas',
    image: IMAGES.home1,
  },
  {
    id: 2,
    name: 'Apartment',
    image: IMAGES.home2,
  },
  {
    id: 3,
    name: 'Bangalow',
    image: IMAGES.home1,
  },
  {
    id: 4,
    name: 'Modern Home',
    image: IMAGES.home2,
  },
  {
    id: 5,
    name: 'penthouses',
    image: IMAGES.home1,
  },
  {
    id: 6,
    name: 'Farm House',
    image: IMAGES.home1,
  },
];
export default function HomeScreen({navigation}) {
  const [click, setClick] = useState(false);
  const [name, sename] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const rotateValue = useRef(new Animated.Value(0)).current;
  const shakeX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      name: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        console.log('Permission: ', res);
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit App',
          'Do you want to exit?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'OK', onPress: () => BackHandler.exitApp()},
          ],
          {cancelable: false},
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const shake = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeX, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeX, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeX, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      {iterations: 2}, // Number of iterations
    ).start();
  };

  const flip = () => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      shake();
    });
  };
  useEffect(() => {
    flip();
  }, []);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // const memoizedCallback = useCallback(
  //   name => {
  //     sename(name);
  //   },
  //   [name],
  // );
  const memoizedCallback = useCallback(item => {
    navigation.navigate('CleanService', {item: item});
  });
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="Welcome back" isTab navigation={navigation} />
      </View>
      <ScreenView>
        <TouchableOpacity
          onPress={handleClick}
          style={{width: '100%', alignItems: 'center', marginVertical: 20}}>
          <Text style={{color: click ? 'pink' : COLORS.primary, fontSize: 20}}>
            What's your home type?
          </Text>
          <Text style={{color: !click ? 'pink' : COLORS.primary, fontSize: 20}}>
            {name}
          </Text>
        </TouchableOpacity>
        <View style={{paddingHorizontal: 10, flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <RenderHome item={item} onpress={memoizedCallback} />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </ScreenView>
    </View>
  );
}
