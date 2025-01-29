import { FieldValues, RegisterOptions, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { addAvatarUrl, addEmail, addToken, addUsername } from '../store/userData/userDataSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { updateAccount } from '../tools/fetch/updateAccount';

export const EditProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.user.username);
  const email = useSelector((state: RootState) => state.user.user.email);
  const avatarUrl = useSelector((state: RootState) => state.user.user.avatarUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: username,
      email: email,
      avatar: avatarUrl,
      password: '',
    },
  });

  const handleSubmitFull = handleSubmit(async (dataForm) => {
    const updateData = {
      user: {
        username: dataForm.username,
        email: dataForm.email,
        image: dataForm.avatar,
        password: dataForm.password,
        bio: '',
      },
    };
    try {
      const data = await updateAccount(updateData);
      console.log(data);
      if (data?.user) {
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('avatarUrl', data.user.image);
        dispatch(addToken(data.user.token));
        dispatch(addEmail(data.user.email));
        dispatch(addUsername(data.user.username));
        dispatch(addAvatarUrl(data.user.image));
        navigate('/');
        // return toast.success("Account created! Now log in")
      } else if (data?.errors) {
        let errorMessage = '';
        for (const error in data.errors) {
          errorMessage += `${error} ${data.errors[error]}\n`;
        }
        return toast.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="w-[384px] h-[600px] py-12 px-8 rounded-md border-[1px] shadow-sm bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Edit profile</h1>
      <ToastContainer />
      <form className="mt-5" onSubmit={handleSubmitFull}>
        <div className="relative">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <Input
            w={320}
            h={40}
            placeholder="Username"
            id="username"
            type="text"
            register={
              register as (
                name: string,
                options?: RegisterOptions<FieldValues, string> | undefined
              ) => UseFormRegisterReturn<string>
            }
            registerArgs={{
              required: 'This field is required',
              minLength: { value: 3, message: 'Your username needs to be at least 3 characters' },
              maxLength: { value: 20, message: 'Your username needs to be less than 20 characters' },
            }}
            border={Boolean(errors.username?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.username?.message as string}</span>
        </div>
        <div className="mt-8 relative">
          <label className="text-sm" htmlFor="email">
            Email address
          </label>
          <Input
            w={320}
            h={40}
            placeholder="Email address"
            id="email"
            type="email"
            register={
              register as (
                name: string,
                options?: RegisterOptions<FieldValues, string> | undefined
              ) => UseFormRegisterReturn<string>
            }
            registerArgs={{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'You should provide correct email addess',
              },
            }}
            border={Boolean(errors.email?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.email?.message as string}</span>
        </div>
        <div className="mt-8 relative">
          <label className="text-sm" htmlFor="password">
            New password
          </label>
          <Input
            w={320}
            h={40}
            placeholder="New password"
            id="password"
            type="password"
            register={
              register as (
                name: string,
                options?: RegisterOptions<FieldValues, string> | undefined
              ) => UseFormRegisterReturn<string>
            }
            registerArgs={{
              required: 'This field is required',
              minLength: { value: 6, message: 'Your password needs to be at least 6 characters' },
              maxLength: { value: 40, message: 'Your password needs to be less than 40 characters' },
            }}
            border={Boolean(errors.password?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.password?.message as string}</span>
        </div>
        <div className="mt-8 relative">
          <label className="text-sm" htmlFor="avatar">
            Avatar image(url)
          </label>
          <Input
            w={320}
            h={40}
            placeholder="Avatar image"
            id="avatar"
            type="text"
            register={
              register as (
                name: string,
                options?: RegisterOptions<FieldValues, string> | undefined
              ) => UseFormRegisterReturn<string>
            }
            registerArgs={{
              required: '',
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                message: 'You should provide correct url',
              },
            }}
            border={Boolean(errors.avatar?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.avatar?.message as string}</span>
        </div>
        <Button w={320} h={40} classes="bg-blue-600 text-white mt-10 py-3" text="Save" type="submit" />
      </form>
    </div>
  );
};
