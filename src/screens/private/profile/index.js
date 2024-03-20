import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import {ProfileView, ProfileMenu} from './profileView';
import {
  EditProfileIcon,
  SettingIcon,
  AboutIcon,
  LogoutIcon,
  ReferIcon,
  NextArrorwIcon,
} from '../../../components/vectors';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen({navigation}) {
  const resetNavigate = useNavigation();

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('authuser');
      resetNavigate.reset({
        index: 0,
        routes: [{name: 'public'}],
      });
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  };
  const logoutFunction = () => {
    Alert.alert('', 'Are you sure want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },

      {
        text: 'logout',
        onPress: logout,
      },
    ]);
  };
  const menus = [
    {
      name: 'Edit profile',
      icon: <EditProfileIcon />,
      onclick: () => {
        navigation.navigate('EditProfile');
      },
    },
    {
      name: 'Settings',
      icon: <SettingIcon />,
      onclick: () => {
        Linking.openSettings();
      },
    },
    {name: 'Change Password', icon: <AboutIcon />, onclick: () => {}},
    {
      name: 'Refer Friends',
      icon: <ReferIcon />,
      onclick: () => {
        navigation.navigate('ContactScreen');
      },
    },
    {name: 'Logout', icon: <LogoutIcon />, onclick: logoutFunction},
  ];
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Header name="Profile" navigation={navigation} backColor={COLORS.white} />
      <ProfileView />
      <ProfileMenu>
        <ScrollView style={{marginTop: 20, flex: 1}}>
          {menus.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={item.onclick}
                key={i}
                style={{
                  height: 100,
                  width: '100%',
                  borderBottomWidth: menus.length - 1 === i ? 0 : 0.6,
                  borderBottomColor: COLORS.primary,
                  paddingHorizontal: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>{item.icon}</View>
                  <Text style={{color: 'black', marginLeft: 10}}>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <NextArrorwIcon />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ProfileMenu>
    </View>
  );
}
