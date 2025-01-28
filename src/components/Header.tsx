import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { addAvatarUrl, addEmail, addToken, addUsername } from '../store/userData/userDataSlice';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.user.user.token)
  const username = useSelector((state: RootState) => state.user.user.username);
  const avatarUrl = useSelector((state: RootState) => state.user.user.avatarUrl);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatarUrl");
    dispatch(addToken(""));
    dispatch(addUsername(""));
    dispatch(addEmail(""));
    dispatch(addAvatarUrl(""));
    navigate("/")
    window.location.reload();
  }
  if (token) {
    return (
      <header className="p-4 flex justify-between items-center h-[80px] bg-white">
        <Link to="/">
          <h1 className="text-xl">Realworld Blog</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/create-article">
            <Button classes="text-green-400 border-green-400 text-xl" text="Create article" h={50} w={120} />
          </Link>
          <Link to="/edit-profile" className="flex gap-2 items-center hover:text-purple-400 transition-colors">
            <span>{username}</span>
            <img src={avatarUrl ? avatarUrl : "../../public/avatar.png"} alt="avatar" width={46} height={46}/>
          </Link>
          <Link to="/articles">
            <Button onClick={handleLogOut} classes="text-xl" text="Log out" h={50} w={160} />
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
