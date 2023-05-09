import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { payload } = action;
      state.books = [...state.books, payload.book];
    },
    removeBook: (state, action) => {
      const { payload } = action;
      state.books = state.books.filter((book) => book.id !== payload.book.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
