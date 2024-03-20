import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
import {getExpertQuery} from '../../../hooks/expertQuery/getExpertQuery';
import RenderExperts from './renderExperts';

export default function SettingScreen({navigation}) {
  const {data, refetch} = getExpertQuery();

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="Find Experts" isTab navigation={navigation} />
      </View>

      <ScreenView>
        <FlatList
          data={data?.data?.data}
          renderItem={({item}) => (
            <RenderExperts item={item} navigation={navigation} />
          )}
          keyExtractor={item => item._id}
        />
      </ScreenView>
    </View>
  );
}
