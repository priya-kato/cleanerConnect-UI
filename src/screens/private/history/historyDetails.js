import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../components/headers/header';
import {COLORS} from '../../../components/assets/color';
import MainFormButton from '../../../components/mainForm/mainButton';

export default function HistoryDetails({navigation, route}) {
  const {item} = route?.params;
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
      <Header
        navigation={navigation}
        name="History"
        backColor={COLORS.primary}
      />
      <View
        style={{
          height: 200,
          backgroundColor: 'pink',
          margin: 20,
          top: 40,
          borderRadius: 10,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 20, top: 30}}>
          Name:{' '}
          <Text style={{color: COLORS.primary, fontSize: 18, top: 30}}>
            {item.name || 'Anonymous'}
          </Text>
        </Text>
        <Text style={{color: 'black', fontSize: 20, top: 50}}>
          Created:{' '}
          <Text style={{color: COLORS.primary, fontSize: 18, top: 30}}>
            {item?.createdAt}
          </Text>
        </Text>
        <Text style={{color: 'black', fontSize: 20, top: 60}}>
          HomeType:{' '}
          <Text style={{color: COLORS.primary, fontSize: 18, top: 30}}>
            {item.homeType}
          </Text>
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 10,
          paddingHorizontal: 20,
        }}>
        <MainFormButton buttonTitle="Cancel" />
        <MainFormButton buttonTitle="Rebooking" />
      </View>
    </View>
  );
}
