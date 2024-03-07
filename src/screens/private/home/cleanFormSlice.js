// formSlice.js
import {createSlice} from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    hometype: '',
    street: '',
    mobileNumber: '',
    country: '',
    city: '',
    norooms: 1,
    // Add more form fields as needed
  },
  reducers: {
    updateFormField: (state, action) => {
      const {field, value} = action.payload;
      state[field] = value;
    },
    resetForm: state => {
      state.name = '';
      state.hometype = '';
      state.street = '';
      state.mobileNumber = '';
      state.country = '';
      state.city = '';
      state.norooms = '';
      // Reset other form fields as needed
    },
  },
});

export const {updateFormField, resetForm} = formSlice.actions;

export default formSlice.reducer;
