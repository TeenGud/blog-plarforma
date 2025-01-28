import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm } from 'react-hook-form';
import { URL_API } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addAvatarUrl, addEmail, addToken, addUsername } from '../store/userData/userDataSlice';
import { toast, ToastContainer } from 'react-toastify';

interface loginData {
  user: {
    email: string,
    password: string
  }
}

export const SignInPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const login = async (loginData: loginData) => {
    const rawResponse = await fetch(`${URL_API}/users/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });
    const content = await rawResponse.json()
    return content
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitFull =
    handleSubmit(async (dataForm) => {
      const loginData = {
        user: {
          email: dataForm.email,
          password: String(dataForm.password)
        }
      }
      try {
        const data = await login(loginData);
        console.log(data)
        if (data?.user) {
          localStorage.setItem("token", data.user.token)
          localStorage.setItem("username", data.user.username)
          localStorage.setItem("email", data.user.email)
          localStorage.setItem("avatarUrl", data.user.image)
          dispatch(addToken(data.user.token))
          dispatch(addEmail(data.user.email))
          dispatch(addUsername(data.user.username))
          dispatch(addAvatarUrl(data.user.image))
          navigate("/")
          window.location.reload();
          // return toast.success("Account created! Now log in")
        } else if (data?.errors) {
          let errorMessage = "";
          for (const error in data.errors) {
            errorMessage += `${error} ${data.errors[error]}\n`
          }
          return toast.error(errorMessage)
        }
      } catch (error) {
        console.log(error)
      }
    })
  return (
    <div className="w-[384px] h-[600px] py-12 px-8 rounded-md border-[1px] shadow-sm bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Sign in</h1>
      <ToastContainer />
      <form
        className="mt-5"
        onSubmit={handleSubmitFull}
      >
        <div className="mt-4 relative">
          <label className="text-sm" htmlFor="email">
            Email address
          </label>
          <Input
            h={40}
            w={320}
            placeholder="Email address"
            id="email"
            type="email"
            register={register}
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
            Password
          </label>
          <Input
            h={40}
            w={320}
            placeholder="Password"
            id="password"
            type="password"
            register={register}
            registerArgs={{
              required: 'This field is required',
            }}
            border={Boolean(errors.password?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.password?.message as string}</span>
        </div>
        <Button classes={'mt-8 text-md bg-blue-600 text-white py-3'} text={'Login'} w={320} h={40} type='submit'/>
      </form>
      <div className="text-center mt-4 text-sm">
        <span>
          Don’t have an account?{' '}
          <Link className="text-purple-700 hover:text-pink-400 transition-colors text-base" to="/register">
            Sign Up.
          </Link>
        </span>
      </div>
    </div>
  );
};
