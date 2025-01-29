import { URL_API } from '../../constants/constants';

interface articleData {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

export const createAnArticle = async (articleData: articleData) => {
  const rawResponse = await fetch(`${URL_API}/articles`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(articleData),
  });
  const content = await rawResponse.json();
  return content;
};
