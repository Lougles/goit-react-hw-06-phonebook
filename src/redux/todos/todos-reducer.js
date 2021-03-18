import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addTodo, changeFilter, deleteContact } from './todos-actions';

const contacts = createReducer([], {
  [addTodo]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload),
  ],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});