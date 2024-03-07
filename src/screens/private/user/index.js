import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';

export default function UserScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="Find Experts" isTab navigation={navigation} />
      </View>
      <ScreenView></ScreenView>
    </View>
  );
}
