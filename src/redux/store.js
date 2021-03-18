import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './todos/todos-reducer';

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;