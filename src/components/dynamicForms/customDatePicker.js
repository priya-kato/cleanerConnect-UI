import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {IST, stringDate} from '../helper/helper';

const CustomDatePicker = ({
  openModal,
  closeModalChange,
  getDate,
  getConvertedDate,
  ...rest
}) => {
  const stringFormat = rest.isDateString;
  const isoFormat = rest.isISOString;

  const hideDatePicker = date => {
    if (stringFormat) {
      const ISTformat = stringDate(date);
      getConvertedDate(ISTformat);
    }
    if (isoFormat) {
      const ISTformat = IST(date);
      getConvertedDate(ISTformat);
    }
    getDate(date);
    closeModalChange();
  };

  const handleConfirm = date => {
    hideDatePicker(date);
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={openModal}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        {...rest}
      />
    </View>
  );
};

export default CustomDatePicker;
