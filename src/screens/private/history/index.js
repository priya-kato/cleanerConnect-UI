import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
import {getHistoryQuery} from '../../../hooks/createQuery/historyQuery.js/getHistoryQuery';
import RenderHistory from './renderHistory';

export default function HistoryScreen({navigation}) {
  const {data} = getHistoryQuery();
  const DATA = data?.data?.form;
  console.log(DATA, 'DATAfromapi');
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="History" isTab navigation={navigation} />
      </View>
      <ScreenView>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <RenderHistory item={item} navigation={navigation} />
          )}
          keyExtractor={item => item._id}
        />
      </ScreenView>
    </View>
  );
}
