import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.contacts.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, name) => {
    if (!name) return items;
    return items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  }
);
