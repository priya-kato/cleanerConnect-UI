import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
export default function SettingScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="Chat with your keeper" isTab navigation={navigation} />
      </View>

      <ScreenView></ScreenView>
    </View>
  );
}
