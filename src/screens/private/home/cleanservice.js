import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Vibration,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Header from '../../../components/headers/header';
import {COLORS} from '../../../components/assets/color';
import ScreenView from '../../../components/commonScreen/screenView';
import MainFormInput from '../../../components/mainForm/mainInput';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../../../components/dynamicForms/customButton';
import {updateFormField, resetForm} from './cleanFormSlice';
import {useSelector, useDispatch} from 'react-redux';
import {createCleanQuery} from '../../../hooks/createQuery/createCleanQuery';
import LottieView from 'lottie-react-native';
import {ANIMATIONS} from '../../../components/animations';
import ListItem from './listItem';
import CustomDropDown from '../../../components/dynamicForms/customDropDown';

export default function Cleanservice({navigation, route}) {
  const dispatch = useDispatch();
  dispatch(
    updateFormField({field: 'homeType', value: route?.params?.item?.name}),
  );
  const [valid, setValid] = useState(false);
  const formState = useSelector(state => state.form);
  const resetCleanForm = () => {
    dispatch(resetForm());
  };
  const createCleanForm = createCleanQuery(resetCleanForm, navigation);

  const inputs = [
    {
      text: 'Name',
      value: formState.name,
      onchange: value => handleFieldChange('name', value),
      placeholderText: 'Enter Name',
      input: '',
    },
    {
      text: 'Street Address',
      value: formState.street,
      onchange: value => handleFieldChange('street', value),
      placeholderText: 'Enter Street',
      input: '',
    },
    {
      text: 'Mobile Number',
      value: formState.mobileNumber,
      onchange: value => handleFieldChange('mobileNumber', value),
      placeholderText: 'Enter Phone',
      input: 'numeric',
    },

    {
      text: 'City',
      value: formState.city,
      onchange: value => handleFieldChange('city', value),
      placeholderText: 'Enter City',
      input: '',
    },
    {
      text: 'Country',
      value: formState.country,
      onchange: value => handleFieldChange('country', value),
      placeholderText: 'Enter Country',
      input: '',
    },
    {
      text: 'Number of Rooms',
      value: formState.norooms,
      onchange: value => handleFieldChange('norooms', value.value),
      isDropdown: true,
      input: '',
    },
  ];
  const handleFieldChange = (field, value) => {
    dispatch(updateFormField({field, value}));
  };
  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
  ];
  const isEmptyObject = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key] && obj[key] !== 0) {
          return true;
        }
      }
    }
    return false;
  };
  const DURATION = 1000;

  const handleSubmit = () => {
    console.log(formState, 'submitform');
    const keys = isEmptyObject(formState);
    if (keys) {
      setValid(true);
      Vibration.vibrate(DURATION);
      setTimeout(() => {
        setValid(false);
      }, 3000);
    } else {
      createCleanForm.mutate(formState);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Header
        name="Address"
        navigation={navigation}
        backColor={COLORS.white}
        nameColor={COLORS.white}
      />
      <View style={{alignItems: 'center', width: '100%', marginVertical: 10}}>
        <Text style={{color: 'black', fontSize: 20}}>
          Let's find you the perfect Cleaner
        </Text>
        <Text style={{color: 'black', top: 10, fontSize: 15}}>
          What's your Address?
        </Text>
      </View>
      <ScreenView>
        <ScrollView style={{padding: 10, flex: 1}}>
          <View style={{marginBottom: 50}}>
            {inputs.map((item, i) => {
              console.log(item, 'items');

              return (
                <View
                  key={i}
                  style={{
                    paddingHorizontal: 10,
                    marginTop: 20,
                  }}>
                  <Text style={{color: COLORS.primary, fontSize: 18}}>
                    {item.text}
                  </Text>
                  {!item.isDropdown ? (
                    <ListItem
                      item={item}
                      index={i}
                      animation={i % 2 === 0 ? 'left' : 'right'}
                    />
                  ) : (
                    <CustomDropDown
                      data={data}
                      value={item.value}
                      onchange={item.onchange}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={{width: '100%', paddingHorizontal: 20, marginBottom: 15}}>
          {valid ? (
            <View
              style={{
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <LottieView
                source={ANIMATIONS.smiley}
                autoPlay
                loop={true}
                duration={2000}
                style={{
                  width: 100,
                  height: 60,
                }}
              />
            </View>
          ) : (
            <CustomButton buttonTitle="Next" onPress={handleSubmit} />
          )}
        </View>
      </ScreenView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dropdown: {
    // margin: 16,
    height: 55,
    borderBottomColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderColor: COLORS.primary,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
