import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchContactsAdd, fetchDeleteContacts } from './createAsyncThunk';

const contactsSlice = createSlice({

  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
      
      state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      console.log(action.payload);
      state.contacts.items = action.payload;

      
      state.error = null;
    })
    .addCase(fetchContacts.rejected,(state, action) => {
      state.contacts.isLoading = false;
      state.error = action.error.message; 
    })
    .addCase(fetchContactsAdd.pending, state => {
      state.contacts.isLoading = true;
      console.log(state);
      state.error = null;
    })
    .addCase(fetchContactsAdd.fulfilled, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(payload)
      
      
      state.error = null;
    })
    .addCase(fetchContactsAdd.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.error = action.payload;
    })
    .addCase(fetchDeleteContacts.pending, state => {
      state.contacts.isLoading = true;
      state.error = null;
    })
    .addCase(fetchDeleteContacts.fulfilled, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(({id}) => id !== payload)
    })
    .addCase(fetchDeleteContacts.rejected, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.error = payload
    })

  }
})


export const contactReducer = contactsSlice.reducer;

export const { createContact, deleteContact, updateFilter } = contactsSlice.actions;