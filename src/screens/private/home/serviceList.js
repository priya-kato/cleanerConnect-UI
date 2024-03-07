import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/headers/header';
import {COLORS} from '../../../components/assets/color';
import ScreenView from '../../../components/commonScreen/screenView';
import RenderServiceList from './renderServiceList';
import MainFormButton from '../../../components/mainForm/mainButton';
import {createServiceQuery} from '../../../hooks/createQuery/createCleanQuery';

export default function ServiceListScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState([]);
  const createService = createServiceQuery(navigation);

  const services = [
    {
      id: 1,
      service: 'General House Cleaning',
      rate: '$50',
      isSelect: false,
    },
    {
      id: 2,
      service: 'Move In/ Move out Cleaning',
      rate: '$70',
      isSelect: false,
    },
    {
      id: 3,
      service: 'Deep House Cleaning',
      rate: '$80',
      isSelect: false,
    },
    {
      id: 4,
      service: 'Specialized House Cleaning',
      rate: '$90',
      isSelect: false,
    },
    {
      id: 5,
      service: 'Additional with Furniture clean',
      rate: '$100',
      isSelect: false,
    },
    {
      id: 6,
      service: 'Proffessional Cleaning',
      rate: '$50',
      isSelect: false,
    },
    {
      id: 7,
      service: 'All in one',
      rate: '$250',
      isSelect: false,
    },
  ];
  const handleSubmit = () => {
    console.log(selectedValue, 'selectedValue');
    const apiData = selectedValue.map(item => {
      return {
        amount: item.rate, // Assuming rate should be renamed to amount
        service: item.service,
      };
    });
    createService.mutate(apiData);
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Header
        name="Services"
        navigation={navigation}
        backColor={COLORS.white}
        nameColor={COLORS.white}
      />
      <View style={{width: '100%', alignItems: 'center', marginVertical: 20}}>
        <Text style={{color: 'black', fontSize: 20}}>Choose your Service</Text>
      </View>
      <ScreenView>
        <View style={{paddingHorizontal: 10, flex: 1, marginTop: 10}}>
          <FlatList
            data={services}
            renderItem={({item}) => (
              <RenderServiceList
                item={item}
                selected={{
                  selectedServices: selectedValue,
                  setSelectedServices: setSelectedValue,
                }}
                services={services}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{width: '100%', paddingHorizontal: 20, marginBottom: 15}}>
          <MainFormButton buttonTitle="Submit" onPress={handleSubmit} />
        </View>
      </ScreenView>
    </View>
  );
}
