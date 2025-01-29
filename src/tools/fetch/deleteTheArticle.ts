import { URL_API } from '../../constants/constants';

export const deleteTheArticle = async (slug: string) => {
  const rawResponse = await fetch(`${URL_API}/articles/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
  const content = await rawResponse.json();
  return content;
};
