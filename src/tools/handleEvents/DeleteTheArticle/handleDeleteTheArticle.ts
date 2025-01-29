import { toast } from 'react-toastify';
import { deleteTheArticle } from '../../fetch/deleteTheArticle';
import { NavigateFunction } from 'react-router-dom';

export const handleDeleteTheArticle = async (navigate: NavigateFunction, slug: string) => {
  try {
    navigate('/');
    const data = await deleteTheArticle(slug);
    console.log(data);
    if (data?.errors) {
      let errorMessage = '';
      for (const error in data.errors) {
        errorMessage += `${error} ${data.errors[error]}\n`;
      }
      return toast.error(errorMessage);
    }
  } catch (error) {
    console.log(error);
  }
};
