import {View, Image, Text} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../components/images';
import {COLORS} from '../../../components/assets/color';
import CustomImage from '../../../components/dynamicForms/customImage';

export const ProfileView = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 100,
          width: 100,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomImage
          src={IMAGES.profileImage}
          imagestyle={{height: 100, width: 100, borderRadius: 100}}
        />
      </View>
      <Text style={{color: COLORS.white, marginTop: 20, fontWeight: '700'}}>
        Priya
      </Text>
      <Text style={{color: COLORS.white, marginTop: 5, fontWeight: '700'}}>
        priya@gmail.com
      </Text>
    </View>
  );
};

export const ProfileMenu = ({children}) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 500,
      }}>
      {children}
    </View>
  );
};
