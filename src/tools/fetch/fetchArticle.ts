import axios from 'axios';
import { URL_API } from '../../constants/constants';

export const fetchArticle = async (location: string) => {
  console.log(URL_API + location);
  const res = await axios.get(URL_API + location, {
    headers: { Authorization: `Token ${localStorage.getItem('token')}` },
  });
  return res.data;
};
