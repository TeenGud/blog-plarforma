import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Header = () => {
  const isAuthorized = true;
  if (isAuthorized) {
    return (
      <header className="p-4 flex justify-between items-center h-[80px] bg-white">
        <Link to="/">
          <h1 className="text-xl">Realworld Blog</h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/create-article">
            <Button classes="text-green-400 border-green-400 text-xl" text="Create article" h={50} w={120} />
          </Link>
          <Link to="/edit-profile" className="flex gap-2 items-center hover:text-purple-400 transition-colors">
            <span>John Doe</span>
            <img src="../../public/avatar.png" alt="avatar" />
          </Link>
          <Link to="/articles">
            <Button classes="text-xl" text="Log out" h={50} w={160} />
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="p-4 flex justify-between items-center h-[80px] bg-white">
        <Link to="/">
          <h1 className="text-xl">Realworld Blog</h1>
        </Link>
        <div>
          <Link to="/login" className="h-[50px]">
            <Button classes={'mr-8 text-xl border-none'} text={'Sign in'} h={50} />
          </Link>
          <Link to="/register" className="h-[50px]">
            <Button classes="text-green-500 border-green-500 text-xl" text="Sign up" w={130} h={50} />
          </Link>
        </div>
      </header>
    );
  }
};
