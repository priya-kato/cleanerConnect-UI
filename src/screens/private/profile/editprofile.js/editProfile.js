import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../components/headers/header';
import {COLORS} from '../../../../components/assets/color';
import CustomInput from '../../../../components/dynamicForms/customInput';
import {useSelector, useDispatch} from 'react-redux';
import {updateUserField} from './profileSlice';
import CustomCard from '../../../../components/dynamicForms/customCard';
import CustomButton from '../../../../components/dynamicForms/customButton';
import CustomDatePicker from '../../../../components/dynamicForms/customDatePicker';
export default function EditProfile({navigation}) {
  const dispatch = useDispatch();
  const formState = useSelector(state => state.profile);
  console.log(formState, 'formStatess');
  const [isEmail, setIsemail] = useState();

  const handleFieldChange = (field, value) => {
    dispatch(updateUserField({field, value}));
  };

  const fields = [
    {
      label: 'firstname',
      value: formState.fname,
      onchange: value => handleFieldChange('fname', value),
      minlength: 3,
      placeholder: 'Firstname',
    },
    {
      label: 'email',
      value: formState.email,
      onchange: value => handleFieldChange('email', value),
      isValidation: true,
      placeholder: 'Email',
      inputmode: 'email',
      isValid: setIsemail,
    },
    {
      label: 'phone',
      value: formState.phonenumber,
      onchange: value => handleFieldChange('phonenumber', value),
      placeholder: 'Phone',
      inputmode: 'numeric',
      minlength: 10,
    },
  ];
  const handlesubmit = () => {
    console.log(isEmail, 'isemailvalid');
  };
  const openDatePicker = () => {
    handleFieldChange('openDatePicker', true);
  };

  const closeDatePicker = () => {
    handleFieldChange('openDatePicker', false);
  };
  const getdate = date => {
    console.log(date, 'datefrom');
    handleFieldChange('date', date);
  };
  const getConverDate = date => {
    console.log(date, 'datefrom');
    handleFieldChange('convertedDate', date);
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
      <Header
        name="Edit Profile"
        navigation={navigation}
        backColor={COLORS.primary}
      />
      <View style={{top: 50}}>
        <CustomCard view>
          {fields.map(item => {
            return (
              <View style={{marginVertical: 10}}>
                <CustomInput
                  value={item.value}
                  borderColor={COLORS.primary}
                  onChangeText={item.onchange}
                  emailValidation={item?.isValidation}
                  color={COLORS.primary}
                  minlength={item?.minlength}
                  placeholder={item.placeholder}
                  inputMode={item?.inputmode}
                  isValid={item?.isValid}
                  enableOnchange={true}
                />
              </View>
            );
          })}
        </CustomCard>
      </View>
      <CustomCard top={80} onPress={openDatePicker}>
        <CustomDatePicker
          openModal={formState.openDatePicker}
          closeModalChange={closeDatePicker}
          getDate={getdate}
          getConvertedDate={getConverDate}
          isISOString
        />
        {formState?.convertedDate && (
          <Text style={{color: 'red'}}>{formState?.convertedDate}</Text>
        )}
      </CustomCard>
      <View style={{width: '100%', position: 'absolute', bottom: 0}}>
        <CustomButton buttonTitle="Submit" onPress={handlesubmit} />
      </View>
    </View>
  );
}
