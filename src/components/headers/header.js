import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {BackArrowIcon, ReferIcon} from '../vectors';
import {COLORS} from '../assets/color';
import {IMAGES} from '../images';

export default function Header({
  isTab,
  name,
  navigation,
  backColor,
  nameColor,
  lineColor
}) {
  if (isTab) {
    return (
      <View
        style={{
          width: '100%',
          height: 80,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: COLORS.white,
            marginHorizontal: 10,
          }}>
          <Image
            style={{
              height: 70,
              width: 70,
              borderRadius: 100,
            }}
            source={IMAGES.profileImage}
          />
        </TouchableOpacity>
        <View style={{width: '50%'}}>
          <Text
            style={{
              color: nameColor ? nameColor : 'white',
              fontSize: 16,
              fontWeight: '800',
            }}>
            {name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: -20,
            right: -10,
          }}>
          <ReferIcon stroke={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={{
          width: '100%',
          height: 80,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: lineColor || COLORS.primary,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: '20%'}}>
          <BackArrowIcon stroke={backColor} />
        </TouchableOpacity>
        <View style={{width: '60%', alignItems: 'center'}}>
          <Text
            style={{
              color: nameColor ? nameColor : COLORS.primary,
              fontSize: 18,
            }}>
            {name}
          </Text>
        </View>
      </View>
    );
  }
}
