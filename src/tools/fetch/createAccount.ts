import { URL_API } from '../../constants/constants';

interface signUpData {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export const createAccount = async (signUpData: signUpData) => {
  const rawResponse = await fetch(`${URL_API}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  });
  const content = await rawResponse.json();
  return content;
};
