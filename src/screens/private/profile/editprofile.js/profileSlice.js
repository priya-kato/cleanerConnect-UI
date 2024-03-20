// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'editprofile',
  initialState: {
    fname: '',
    email: '',
    phonenumber: '',
    openDatePicker: false,
    date: '',
    convertedDate: '',
  },
  reducers: {
    updateUserField: (state, action) => {
      const {field, value} = action.payload;
      console.log(field, 'reduxstate', value);
      state[field] = value;
    },
    resetUser: state => {
      state.fname = '';
      state.email = '';
      state.phonenumber = '';
      state.openDatePicker = false;
      state.date = '';
      state.convertedDate = '';
    },
  },
});
export const {updateUserField, resetUser} = profileSlice.actions;

export default profileSlice.reducer;
