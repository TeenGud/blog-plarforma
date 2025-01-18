import { Link } from 'react-router-dom';
import { Post } from './Post';

export const PostList = () => {
  return (
    <ul className="flex flex-col gap-[26px] items-center mb-8 mt-6">
      <Link to="/test">
        <Post classes="w-[941px] shadow-md" />
      </Link>
      <Link to="/test">
        <Post classes="w-[941px] shadow-md" />
      </Link>
      <Link to="/test">
        <Post classes="w-[941px] shadow-md" />
      </Link>
      <Link to="/test">
        <Post classes="w-[941px] shadow-md" />
      </Link>
      <Link to="/test">
        <Post classes="w-[941px] shadow-md" />
      </Link>
    </ul>
  );
};
