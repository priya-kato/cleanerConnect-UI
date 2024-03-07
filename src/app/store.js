import {configureStore} from '@reduxjs/toolkit';
import formSlice from '../screens/private/home/cleanFormSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    // Add more reducers here if needed
  },
});
