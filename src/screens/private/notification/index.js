import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
import CustomMap from '../../../components/dynamicForms/customMap';

export default function NotificationScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="Notifications" isTab navigation={navigation} />
      </View>
      <ScreenView>
        <CustomMap />
      </ScreenView>
    </View>
  );
}
