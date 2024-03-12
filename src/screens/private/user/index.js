import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../../../components/assets/color';
import Header from '../../../components/headers/header';
import ScreenView from '../../../components/commonScreen/screenView';
import {MessageIcon} from '../../../components/vectors';
import {getUserQuery} from '../../../hooks/createQuery/createCleanQuery';
import RenderUser from './renderUser';

export default function UserScreen({navigation}) {
  const {data, refetch} = getUserQuery();
  console.log(data?.data?.data, 'userdetails');
  const DATA = data?.data?.data;
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Header name="Chat with your keeper" isTab navigation={navigation} />
      </View>
      <ScreenView>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <RenderUser item={item} navigation={navigation} />
          )}
          keyExtractor={item => item._id}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateContact', {refetch: refetch});
          }}
          style={{
            height: 60,
            width: 60,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            position: 'absolute',
            right: 20,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MessageIcon />
        </TouchableOpacity>
      </ScreenView>
    </View>
  );
}
