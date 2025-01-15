import rootSlice from './rootSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ 
  reducer: { 
    root: rootSlice.reducer, 
  }, 
})

export default store;