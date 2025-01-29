import { createSlice } from '@reduxjs/toolkit';

interface ArticleData {
  article: {
    body: string | null;
    description: string | null;
    title: string | null;
    tagList: string[];
  };
}

const initialState: ArticleData = {
  article: {
    body: '',
    description: '',
    title: '',
    tagList: [],
  },
};

const currentArticleDataSlice = createSlice({
  name: 'currentArticle',
  initialState,
  reducers: {
    addBody: (state, action) => {
      state.article.body = action.payload;
    },
    addDescription: (state, action) => {
      state.article.description = action.payload;
    },
    addTitle: (state, action) => {
      state.article.title = action.payload;
    },
    addTagList: (state, action) => {
      state.article.tagList = action.payload;
    },
  },
});

export const { addBody, addDescription, addTitle, addTagList } = currentArticleDataSlice.actions;
export default currentArticleDataSlice.reducer;
