import { URL_API } from '../../constants/constants';

interface loginData {
  user: {
    email: string;
    password: string;
  };
}

export const login = async (loginData: loginData) => {
  const rawResponse = await fetch(`${URL_API}/users/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });
  const content = await rawResponse.json();
  return content;
};
