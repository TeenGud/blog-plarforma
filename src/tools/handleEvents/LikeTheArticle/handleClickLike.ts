// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Id } from 'react-toastify';

type handleUnfavoriteTheArticle = (
  slug: string,
  setIsFavorited: (value: boolean) => void,
  setLikes: (prev: (prev: number) => number) => void,
  singlePost: boolean,
) => Promise<Id | undefined>;

type handleFavoriteTheArticle = (
  slug: string,
  setIsFavorited: (value: boolean) => void,
  setLikes: (prev: (prev: number) => number) => void,
  singlePost: boolean,
) => Promise<Id | undefined>;

type handleClickLikeInterface = (
  event: Event,
  isFavorited: boolean,
  handleUnfavoriteTheArticle: handleUnfavoriteTheArticle,
  handleFavoriteTheArticle: handleFavoriteTheArticle,
  slug: string,
  setIsFavorited: () => void,
  setLikes: () => void,
  singlePost: boolean
) => void;

export const handleClickLike: handleClickLikeInterface = (
  event,
  isFavorited,
  handleUnfavoriteTheArticle,
  handleFavoriteTheArticle,
  slug,
  setIsFavorited,
  setLikes,
  singlePost
) => {
  event.preventDefault();
  if (isFavorited) {
    handleUnfavoriteTheArticle(slug, setIsFavorited, setLikes, singlePost);
  } else {
    handleFavoriteTheArticle(slug, setIsFavorited, setLikes, singlePost);
  }
};
