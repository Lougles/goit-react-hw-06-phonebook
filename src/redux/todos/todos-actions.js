import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addTodo = createAction(
  'contact/addTodo',
  ({ name, number }) => {
    return {
      payload: {
        name,
        id: uuidv4(),
        number,
      },
    };
  },
);

const changeFilter = createAction('contact/changeFilter');

const deleteContact = createAction('contact/deleteContact');

export { addTodo, changeFilter, deleteContact };