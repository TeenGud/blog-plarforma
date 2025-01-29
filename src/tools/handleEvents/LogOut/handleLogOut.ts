import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { addAvatarUrl, addEmail, addToken, addUsername } from '../../../store/userData/userDataSlice';

export const handleLogOut = (dispatch: AppDispatch, navigate: NavigateFunction) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('avatarUrl');
  dispatch(addToken(''));
  dispatch(addUsername(''));
  dispatch(addEmail(''));
  dispatch(addAvatarUrl(''));
  navigate('/');
  window.location.reload();
};
