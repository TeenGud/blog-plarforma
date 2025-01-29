import { URL_API } from '../../constants/constants';

interface updateData {
  user: {
    email: string | null;
    username: string | null;
    image: string | null;
    password: string | null;
    bio: string | null;
  };
}

export const updateAccount = async (updateData: updateData) => {
  const rawResponse = await fetch(`${URL_API}/user`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(updateData),
  });
  const content = await rawResponse.json();
  return content;
};
