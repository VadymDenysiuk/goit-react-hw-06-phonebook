import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
import toast from 'react-hot-toast';

const addContact = (state, { payload }) => {
  const duplicateName = state.find(contact => contact.name.includes(payload.name));
  if (duplicateName) {
    toast.error('Already here');
  } else {
    return [payload, ...state];
  }
};

const deleteContact = (state, { payload }) => state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
