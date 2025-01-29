import { Id } from 'react-toastify';

type handleUnfavoriteTheArticle = (
  slug: string,
  setIsFavorited: (value: boolean) => void,
  setLikes: (prev: (prev: number) => number) => void
) => Promise<Id | undefined>;

type handleFavoriteTheArticle = (
  slug: string,
  setIsFavorited: (value: boolean) => void,
  setLikes: (prev: (prev: number) => number) => void
) => Promise<Id | undefined>;

type handleClickLikeInterface = (
  event: Event,
  isFavorited: boolean,
  handleUnfavoriteTheArticle: handleUnfavoriteTheArticle,
  handleFavoriteTheArticle: handleFavoriteTheArticle,
  slug: string,
  setIsFavorited: () => void,
  setLikes: () => void
) => void;

export const handleClickLike: handleClickLikeInterface = (
  event,
  isFavorited,
  handleUnfavoriteTheArticle,
  handleFavoriteTheArticle,
  slug,
  setIsFavorited,
  setLikes
) => {
  event.preventDefault();
  if (isFavorited) {
    handleUnfavoriteTheArticle(slug, setIsFavorited, setLikes);
  } else {
    handleFavoriteTheArticle(slug, setIsFavorited, setLikes);
  }
};
