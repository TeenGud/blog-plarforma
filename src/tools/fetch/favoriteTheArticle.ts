import { URL_API } from '../../constants/constants';

export const favoriteTheArticle = async (slug: string) => {
  const rawResponse = await fetch(`${URL_API}/articles/${slug}/favorite`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
  const content = await rawResponse.json();
  return content;
};
