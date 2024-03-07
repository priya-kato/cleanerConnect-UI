import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../components/assets/color';
import CheckBox from '@react-native-community/checkbox';

const RenderServiceList = ({item, selected, services}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(item.isSelect);

  const handleSelect = () => {
    const index = selected.selectedServices.findIndex(
      selectedService => selectedService.id === item.id,
    );

    if (index === -1) {
      selected.setSelectedServices([...selected.selectedServices, item]);
    } else {
      const updatedServices = [...selected.selectedServices];
      updatedServices.splice(index, 1);
      selected.setSelectedServices(updatedServices);
    }
    setToggleCheckBox(!toggleCheckBox);
  };
  return (
    <TouchableOpacity
      onPress={handleSelect}
      style={{
        padding: 20,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        marginHorizontal: 10,
        borderRadius: 15,
      }}>
      <View style={{width: '90%'}}>
        <Text style={{color: COLORS.primary, fontSize: 16}}>
          {item.service}
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>{item.rate}</Text>
      </View>
      <CheckBox
        value={toggleCheckBox}
        boxType="square"
        tintColors={{false: '#aaa', true: COLORS.primary}}
        onValueChange={handleSelect}
      />
    </TouchableOpacity>
  );
};

export default RenderServiceList;
