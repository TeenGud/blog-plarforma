import { toast } from 'react-toastify';
import { favoriteTheArticle } from '../../fetch/favoriteTheArticle';

export const handleFavoriteTheArticle = async (
  slug: string,
  setIsFavorited: (value: boolean) => void,
  setLikes: (prev: (prev: number) => number) => void,
  singlePost: boolean
) => {
  try {
    const data = await favoriteTheArticle(slug);
    console.log(data);
    if (data?.article) {
      setIsFavorited(true);
      setLikes((prev) => prev + 1);
      if (singlePost) {
        window.location.reload();
      }
      // return toast.success("Account created! Now log in")
    } else if (data?.errors) {
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
