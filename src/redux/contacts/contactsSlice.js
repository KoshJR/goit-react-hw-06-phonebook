import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts: [],
    filter: '',
}

const contactsSlice = createSlice({
   name: 'contacts',
   initialState,
   reducers: {
    addContact(state, action) {
        state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
        state.contacts = state.contacts.filter(friend => friend.id !== action.payload)
    },
    setFilter(state, action) {
        state.filter = action.payload;
    }
   }
})

export const { addContact, removeContact, setFilter} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;