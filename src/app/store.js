import {configureStore} from '@reduxjs/toolkit';
import formSlice from '../screens/private/home/cleanFormSlice';
import userSlice from '../screens/private/user/userSlice';
import profileSlice from '../screens/private/profile/editprofile.js/profileSlice';
export const store = configureStore({
  reducer: {
    form: formSlice,
    user: userSlice,
    profile: profileSlice,
    // Add more reducers here if needed
  },
});
