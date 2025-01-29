import { toast } from 'react-toastify';
import { unfavoriteTheArticle } from '../../fetch/unfavoriteTheArticle';

export const handleUnfavoriteTheArticle = async (
  slug: string,
  setIsFavorited: (value: boolean) => void,
  setLikes: (prev: (prev: number) => number) => void
) => {
  try {
    const data = await unfavoriteTheArticle(slug);
    console.log(data);
    if (data?.article) {
      setIsFavorited(false);
      setLikes((prev) => prev - 1);
      window.location.reload();
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
