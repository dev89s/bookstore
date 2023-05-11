import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createBookApi = createAsyncThunk('books/createBookApi',
  async (book, thunkAPI) => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUNEWfyKm2Gjio1kkwUq/books';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(book),
      });
      await response.text();
    } catch (err) {
      throw thunkAPI.rejectWithValue(`${err.message}`);
    }
  });

export const getBooksApi = createAsyncThunk('books/getBookApi',
  async (name, thunkAPI) => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUNEWfyKm2Gjio1kkwUq/books';
    try {
      const response = await fetch(url);
      const data = await response.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      throw thunkAPI.rejectWithValue(err);
    }
  });
export const deleteBookApi = createAsyncThunk('books/deleteBookApi',
  async (bookId, thunkAPI) => {
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MUNEWfyKm2Gjio1kkwUq/books/${bookId}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      throw thunkAPI.rejectWithValue(err);
    }
  });

// const mockBooks = [
//   {
//     item_id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item3',
//     title: 'The Selfish Gene',
//     author: 'Richard Dawkins',
//     category: 'Nonfiction',
//   },
// ];

const initialState = {
  books: [],
  listState: 'idle',
  error: false,
};

const booksSlice = createSlice({
  name: 'booksState',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { payload } = action;
      state.books = [...state.books, payload.book];
    },
    removeBook: (state, action) => {
      const { payload } = action;
      state.books = state.books.filter((book) => book.item_id !== payload.item_id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBooksApi.fulfilled, (state, action) => {
        state.isLoading = false;
        const { payload } = action;
        const keys = Object.keys(action.payload);
        const books = keys.map((key) => ({ item_id: key, ...payload[key][0] }));
        state.books = [...books];
      })
      .addCase(getBooksApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBookApi.pending, (state) => {
        state.listState = 'uploading';
      })
      .addCase(createBookApi.fulfilled, (state) => {
        state.listState = 'idle';
      })
      .addCase(deleteBookApi.pending, (state) => {
        state.listState = 'deleting';
      })
      .addCase(deleteBookApi.fulfilled, (state) => {
        state.listState = 'idle';
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
