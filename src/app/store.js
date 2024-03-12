import {configureStore} from '@reduxjs/toolkit';
import formSlice from '../screens/private/home/cleanFormSlice';
import userSlice from '../screens/private/user/userSlice';
export const store = configureStore({
  reducer: {
    form: formSlice,
    user: userSlice,
    // Add more reducers here if needed
  },
});
