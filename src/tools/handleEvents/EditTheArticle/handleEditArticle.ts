import {
  addBody,
  addDescription,
  addTagList,
  addTitle,
} from '../../../store/currentArticleData/currentArticleDataSlice';
import { AppDispatch } from '../../../store/store';

export const handleEditArticle = (
  dispatch: AppDispatch,
  body: string,
  description: string,
  title: string,
  tagList: string[]
) => {
  dispatch(addBody(body));
  dispatch(addDescription(description));
  dispatch(addTitle(title));
  dispatch(addTagList(tagList));
};
