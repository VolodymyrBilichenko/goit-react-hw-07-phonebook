import { createAsyncThunk } from "@reduxjs/toolkit";
import { allContactsGet, addContacts, removeContacts } from '../../api/api';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await allContactsGet();
      return response;
    } catch (err) {
      thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchContactsAdd = createAsyncThunk(
  'contacts/addFetchContacts',
  async (data, thunkApi) => {
    try {
      const response = await addContacts(data);
      console.log(response);
      return response;
    } catch (err) {
      thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/deleteFetchContacts',
  async (id, thunkApi) => {
    try {
      const response = await removeContacts(id);
      return response.id;
    } catch (err) {
      thunkApi.rejectWithValue(err.message);
    }
  }
);
