import { Post } from '../components/Post';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MarkdownText } from '../components/MarkdownText';
import { fetchArticle } from '../tools/fetch/fetchArticle';

export const SinglePostPage = () => {
  const location = useLocation().pathname;
  const username = useSelector((state: RootState) => state.user.user.username);
  const { isPending, error, data } = useQuery({
    queryKey: ['article'],
    queryFn: () => fetchArticle(location),
  });

  if (isPending) return <span className="loader flex items-center justify-center mt-10"></span>;

  if (error) return <span className="mt-4 ml-5 font-semibold text-2xl">An error has occurated: {error.message}</span>;
  console.log(data.article);
  return (
    <div className="flex items-center justify-center mt-6 flex-col mb-4">
      <Post
        classes={'w-[1200px]'}
        isMyPost={username === data.article.author.username}
        article={data.article}
        singlePost={true}
      />
      <MarkdownText text={data.article.body} />
    </div>
  );
};
