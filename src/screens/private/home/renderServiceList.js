import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {COLORS} from '../../../components/assets/color';
import CheckBox from '@react-native-community/checkbox';

const RenderServiceList = ({item, selected, index}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      delay: index * 100, // Delay each item's animation
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

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
    <Animated.View
      style={[
        {
          opacity: opacity,
        },
      ]}>
      <TouchableOpacity
        style={{
          padding: 20,
          marginVertical: 10,
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          marginHorizontal: 10,
          borderRadius: 15,
        }}
        onPress={handleSelect}>
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
    </Animated.View>
  );
};

export default RenderServiceList;
