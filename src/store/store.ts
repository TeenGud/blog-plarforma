import { configureStore } from '@reduxjs/toolkit';
import userDataSlice from './userData/userDataSlice.ts';
import currentArticleDataSlice from './currentArticleData/currentArticleDataSlice.ts';

export const store = configureStore({
  reducer: { user: userDataSlice, currentArticle: currentArticleDataSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
