import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
import {getHistoryQuery} from '../../../hooks/historyQuery.js/getHistoryQuery';
import RenderHistory from './renderHistory';

export default function HistoryScreen({navigation}) {
  const {data} = getHistoryQuery();
  const DATA = data?.data?.form;
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="History" isTab navigation={navigation} />
      </View>
      <ScreenView>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => (
            <RenderHistory item={item} navigation={navigation} index={index} />
          )}
          keyExtractor={item => item._id}
        />
      </ScreenView>
    </View>
  );
}
