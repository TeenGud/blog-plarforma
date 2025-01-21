import Markdown from 'react-markdown';
import { Post } from '../components/Post';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLocation } from 'react-router-dom';
import { URL_API } from '../constants/constants';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const SinglePostPage = () => {
  const location = useLocation().pathname;
  const fetchArticle = async () => {
    console.log(URL_API + location);
    const res = await axios.get(URL_API + location);
    return res.data;
  };
  const { isPending, error, data } = useQuery({
    queryKey: ['article'],
    queryFn: () => fetchArticle(),
  });
  if (isPending) return <span className="loader flex items-center justify-center mt-10"></span>;

  if (error) return <span className="mt-4 ml-5 font-semibold text-2xl">An error has occurated: {error.message}</span>;

  return (
    <div className="flex items-center justify-center mt-6 flex-col mb-4">
      <Post classes={'w-[1200px]'} isMyPost={true} article={data.article} />
      <Markdown className="w-[1200px] bg-white p-2 pt-4" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {data.article.body}
      </Markdown>
    </div>
  );
};
