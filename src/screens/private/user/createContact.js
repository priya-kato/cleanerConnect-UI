import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/headers/header';
import {COLORS} from '../../../components/assets/color';
import ScreenView from '../../../components/commonScreen/screenView';
import MainFormInput from '../../../components/mainForm/mainInput';
import MainFormButton from '../../../components/mainForm/mainButton';
import {createContactQuery} from '../../../hooks/createQuery/createCleanQuery';
import {updateUserField, resetUser} from './userSlice';
import {useSelector, useDispatch} from 'react-redux';

export default function CreateContact({navigation, route}) {
  const {refetch} = route?.params;
  const resetCleanForm = () => {
    dispatch(resetUser());
  };
  const createContact = createContactQuery(navigation, refetch, resetCleanForm);
  const handleFieldChange = (field, value) => {
    dispatch(updateUserField({field, value}));
  };
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  console.log(userState, 'userState');
  const data = [
    {
      text: 'Enter first name',
      value: userState.fname,
      onchange: value => handleFieldChange('fname', value),
      heading: 'First Name',
    },
    {
      text: 'Enter last name',
      value: userState.lname,
      onchange: value => handleFieldChange('lname', value),
      heading: 'Last Name',
    },
    {
      text: 'Enter phone number',
      value: userState.phonenumber,
      onchange: value => handleFieldChange('phonenumber', value),
      heading: 'Phone Number',
    },
  ];
  const handleSubmit = () => {
    const submitData = {
      firstname: userState.fname,
      lastname: userState.lname,
      phonenumber: userState.phonenumber,
    };
    console.log(submitData, 'userStatesubmit');

    createContact.mutate(submitData);
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Header
        name="Create Contact"
        backColor={COLORS.white}
        nameColor={COLORS.white}
        lineColor={COLORS.white}
        navigation={navigation}
      />
      <ScreenView>
        <ScrollView style={{padding: 30}}>
          {data.map(item => {
            return (
              <View>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 20,
                    fontWeight: '700',
                  }}>
                  {item.heading}
                </Text>
                <MainFormInput
                  labelValue={item.value}
                  onChangeText={item.onchange}
                  placeholderText={item.text}
                />
              </View>
            );
          })}
        </ScrollView>
        <View style={{width: '100%', padding: 20}}>
          <MainFormButton buttonTitle="Create" onPress={handleSubmit} />
        </View>
      </ScreenView>
    </View>
  );
}
