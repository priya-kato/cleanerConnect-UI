// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    fname: '',
    lname: '',
    phonenumber: '',
  },
  reducers: {
    updateUserField: (state, action) => {
      const {field, value} = action.payload;
      state[field] = value;
    },
    resetUser: state => {
      state.fname = '';
      state.lname = '';
      state.phonenumber = '';
    },
  },
});
export const {updateUserField, resetUser} = userSlice.actions;

export default userSlice.reducer;
