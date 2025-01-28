import { Link } from 'react-router-dom';
import { Post } from './Post';

export interface Article {
  author: { username: string; image: string; following: boolean };
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}

interface PostListInterface {
  articles: Article[];
}

export const PostList = ({ articles }: PostListInterface) => {
  return (
    <ul className="flex flex-col gap-[26px] items-center mb-8 mt-6">
      {articles.map((article: Article) => {
        return (
          <Link to={`/articles/${article.slug}`} key={article.slug}>
            <Post classes="w-[941px] shadow-md"  article={article} singlePost={false}/>
          </Link>
        );
      })}
    </ul>
  );
};
