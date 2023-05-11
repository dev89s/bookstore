import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoryReducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    booksState: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
