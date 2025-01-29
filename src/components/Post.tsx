import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useState } from 'react';
import { Article } from './PostList';
import { truncateString } from '../tools/truncateString';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { formatTime } from '../tools/formatTime';
import { handleDelete } from '../tools/handleEvents/DeleteTheArticle/handleDelete';
import { handleClickLike } from '../tools/handleEvents/LikeTheArticle/handleClickLike';
import { handleDeleteTheArticle } from '../tools/handleEvents/DeleteTheArticle/handleDeleteTheArticle';
import { handleUnfavoriteTheArticle } from '../tools/handleEvents/LikeTheArticle/handleUnfavoriteTheArticle';
import { handleFavoriteTheArticle } from '../tools/handleEvents/LikeTheArticle/handleFavoriteTheArticle';
import { handleEditArticle } from '../tools/handleEvents/EditTheArticle/handleEditArticle';

interface PostInterface {
  classes?: string;
  isMyPost?: boolean;
  article: Article;
  singlePost: boolean;
}

export const Post = ({ classes, isMyPost, article, singlePost }: PostInterface) => {
  let fill = '';
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.user.user.token);
  const [isHidden, setIsHidden] = useState(true);
  const { title, tagList, author, description, favoritesCount, createdAt, favorited, slug, body } = article;
  const [isFavorited, setIsFavorited] = useState(favorited ? favorited : false);
  const [likes, setLikes] = useState(favoritesCount);

  // const deleteTheArticle = async (slug: string) => {
  //   const rawResponse = await fetch(`${URL_API}/articles/${slug}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       "Authorization": `Token ${localStorage.getItem("token")}`
  //     },
  //   });
  //   const content = await rawResponse.json()
  //   return content
  // }
  // const favoriteTheArticle = async (slug: string) => {
  //   const rawResponse = await fetch(`${URL_API}/articles/${slug}/favorite`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       "Authorization": `Token ${localStorage.getItem("token")}`
  //     },
  //   });
  //   const content = await rawResponse.json()
  //   return content
  // }
  // const unfavoriteTheArticle = async (slug: string) => {
  //   const rawResponse = await fetch(`${URL_API}/articles/${slug}/favorite`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       "Authorization": `Token ${localStorage.getItem("token")}`
  //     },
  //   });
  //   const content = await rawResponse.json()
  //   return content
  // }
  // const handleDeleteTheArticle = async () => {
  //   try {
  //     navigate("/")
  //     const data = await deleteTheArticle(article.slug);
  //     console.log(data)
  //     if (data?.errors) {
  //       let errorMessage = "";
  //       for (const error in data.errors) {
  //         errorMessage += `${error} ${data.errors[error]}\n`
  //       }
  //       return toast.error(errorMessage)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handleUnfavoriteTheArticle = async () => {
  //   try {
  //     const data = await unfavoriteTheArticle(article.slug);
  //     console.log(data)
  //     if (data?.article) {
  //       setIsFavorited(false)
  //       setLikes(prev => prev - 1)
  //       window.location.reload();
  //       // return toast.success("Account created! Now log in")
  //     } else if (data?.errors) {
  //       let errorMessage = "";
  //       for (const error in data.errors) {
  //         errorMessage += `${error} ${data.errors[error]}\n`
  //       }
  //       return toast.error(errorMessage)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handleFavoriteTheArticle = async () => {
  //   try {
  //     const data = await favoriteTheArticle(article.slug);
  //     console.log(data)
  //     if (data?.article) {
  //       setIsFavorited(true)
  //       setLikes(prev => prev + 1)
  //       window.location.reload();
  //       // return toast.success("Account created! Now log in")
  //     } else if (data?.errors) {
  //       let errorMessage = "";
  //       for (const error in data.errors) {
  //         errorMessage += `${error} ${data.errors[error]}\n`
  //       }
  //       return toast.error(errorMessage)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  if (singlePost) {
    fill = favorited ? 'red' : '';
  } else if (!singlePost) {
    fill = isFavorited ? 'red' : '';
  }
  return (
    <li className={`${classes} p-2 flex items-start justify-between h-[150px] cursor-pointer bg-white`}>
      <div className="max-w-[682px] flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <h3 className="text-blue-600 text-xl m-0">{truncateString(title, 60)}</h3>
          <button
            className="flex gap-1 items-center"
            disabled={!token}
            onClick={(event: Event) =>
              handleClickLike(
                event,
                isFavorited,
                handleUnfavoriteTheArticle,
                handleFavoriteTheArticle,
                article.slug,
                setIsFavorited as () => void,
                setLikes as () => void
              )
            }
          >
            <svg
              className="hover:fill-red-600 transition-colors"
              width="16"
              height="16"
              fill={fill}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99998 15.1099C7.7722 15.1099 7.5526 15.0273 7.38146 14.8774C6.73509 14.3123 6.11193 13.7811 5.56212 13.3126L5.55932 13.3102C3.94738 11.9365 2.55542 10.7502 1.58691 9.58167C0.504272 8.27527 0 7.03662 0 5.68347C0 4.36877 0.450805 3.15588 1.26928 2.26807C2.09753 1.36975 3.234 0.875 4.46972 0.875C5.3933 0.875 6.23912 1.16699 6.98363 1.7428C7.35936 2.03345 7.69994 2.38916 7.99998 2.80408C8.30015 2.38916 8.64061 2.03345 9.01646 1.7428C9.76097 1.16699 10.6068 0.875 11.5304 0.875C12.766 0.875 13.9026 1.36975 14.7308 2.26807C15.5493 3.15588 16 4.36877 16 5.68347C16 7.03662 15.4958 8.27527 14.4132 9.58154C13.4447 10.7502 12.0528 11.9364 10.4411 13.3099C9.89036 13.7792 9.26622 14.3112 8.61839 14.8777C8.44737 15.0273 8.22765 15.1099 7.99998 15.1099ZM4.46972 1.81226C3.49889 1.81226 2.60705 2.19971 1.95825 2.90332C1.2998 3.61755 0.937132 4.60486 0.937132 5.68347C0.937132 6.82153 1.3601 7.83936 2.30847 8.98364C3.22509 10.0897 4.58849 11.2516 6.1671 12.5969L6.17003 12.5994C6.72191 13.0697 7.34752 13.6029 7.99864 14.1722C8.65367 13.6018 9.28026 13.0677 9.83323 12.5967C11.4117 11.2513 12.775 10.0897 13.6916 8.98364C14.6399 7.83936 15.0628 6.82153 15.0628 5.68347C15.0628 4.60486 14.7002 3.61755 14.0417 2.90332C13.393 2.19971 12.5011 1.81226 11.5304 1.81226C10.8192 1.81226 10.1662 2.03833 9.5897 2.48413C9.07591 2.88159 8.718 3.38403 8.50816 3.7356C8.40025 3.91638 8.21031 4.02429 7.99998 4.02429C7.78966 4.02429 7.59972 3.91638 7.49181 3.7356C7.28209 3.38403 6.92418 2.88159 6.41027 2.48413C5.83373 2.03833 5.18078 1.81226 4.46972 1.81226Z"
                fillOpacity="1"
              />
            </svg>
            <span>{singlePost ? favoritesCount : likes}</span>
          </button>
        </div>
        <ul className="list-none flex gap-2 p-0 mt-0">
          {tagList.map((tag: string, index) => {
            if (!tag?.length) return;
            return (
              <span key={tag + index} className="border-2 p-1 py-0 text-sm">
                {truncateString(tag, 20)}
              </span>
            );
          })}
        </ul>
        <p className="text-sm">{truncateString(description, 80)}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <span>{author.username}</span>
            <span className="text-sm font-light">{formatTime(createdAt)}</span>
          </div>
          <img src={author.image} alt="avatar" height={46} width={46} />
        </div>
        {isMyPost && (
          <div className="flex gap-2 mt-3 relative">
            <Button
              w={78}
              h={30}
              text="Delete"
              classes="text-red-600 border-red-600"
              onClick={() => handleDelete(setIsHidden)}
            />
            <Link
              to={`/articles/${slug}/edit`}
              onClick={() => handleEditArticle(dispatch, body, description, title, tagList)}
            >
              <button className="rounded w-[78px] h-[30px] p-2 text-green-600 border-green-600 border-[1px] flex items-center justify-center hover:text-green-800 transition-colors">
                Edit
              </button>
            </Link>
            <div
              className={`w-[240px] h-[104px] px-3 py-4 rounded bg-white flex flex-col shadow-sm absolute left-20 ${isHidden && 'hidden'}`}
            >
              <div className="flex items-start gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM7.5 4.625C7.5 4.55625 7.55625 4.5 7.625 4.5H8.375C8.44375 4.5 8.5 4.55625 8.5 4.625V8.875C8.5 8.94375 8.44375 9 8.375 9H7.625C7.55625 9 7.5 8.94375 7.5 8.875V4.625ZM8 11.5C7.80374 11.496 7.61687 11.4152 7.47948 11.275C7.3421 11.1348 7.26515 10.9463 7.26515 10.75C7.26515 10.5537 7.3421 10.3652 7.47948 10.225C7.61687 10.0848 7.80374 10.004 8 10C8.19626 10.004 8.38313 10.0848 8.52052 10.225C8.6579 10.3652 8.73485 10.5537 8.73485 10.75C8.73485 10.9463 8.6579 11.1348 8.52052 11.275C8.38313 11.4152 8.19626 11.496 8 11.5Z"
                    fill="#FAAD14"
                  />
                </svg>
                <span className="text-sm">Are you sure to delete this article?</span>
              </div>
              <div className="flex justify-end">
                <Button w={34} h={24} classes="text-sm" text="No" onClick={() => setIsHidden(true)} />
                <Button
                  w={40}
                  h={24}
                  classes="bg-blue-500 text-white text-sm"
                  text="Yes"
                  onClick={() => handleDeleteTheArticle(navigate, article.slug)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};
