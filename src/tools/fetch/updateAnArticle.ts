import { URL_API } from '../../constants/constants';

interface articleData {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

export const updateAnArticle = async (articleData: articleData, slug: string) => {
  const rawResponse = await fetch(`${URL_API}/articles/${slug}`, {
    method: 'PUT',
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
