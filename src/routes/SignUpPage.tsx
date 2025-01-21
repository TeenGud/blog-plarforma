import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-[384px] h-[640px] py-12 px-8 rounded-md border-[1px] shadow-sm bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Create new account</h1>
      <form
        className="mt-5 flex flex-col"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="flex flex-col relative">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <Input
            register={register}
            registerArgs={{
              required: 'This field is required',
              minLength: { value: 3, message: 'Your username needs to be at least 3 characters' },
              maxLength: { value: 20, message: 'Your username needs to be less than 20 characters' },
            }}
            h={40}
            w={320}
            placeholder={'Username'}
            id={'username'}
            type={'text'}
            border={Boolean(errors.username?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">{errors.username?.message as string}</span>
        </div>
        <div className="mt-6 flex flex-col relative">
          <label className="text-sm" htmlFor="email">
            Email address
          </label>
          <Input
            register={register}
            registerArgs={{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'You should provide correct email addess',
              },
            }}
            h={40}
            w={320}
            placeholder={'Email address'}
            id={'email'}
            type={'text'}
            border={Boolean(errors.email?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">{errors.email?.message as string}</span>
        </div>
        <div className="mt-6 flex flex-col relative">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <Input
            register={register}
            registerArgs={{
              required: 'This field is required',
              minLength: { value: 6, message: 'Your password needs to be at least 6 characters' },
              maxLength: { value: 40, message: 'Your password needs to be less than 40 characters' },
            }}
            h={40}
            w={320}
            placeholder={'Password'}
            id={'password'}
            type={'password'}
            border={Boolean(errors.password?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">{errors.password?.message as string}</span>
        </div>
        <div className="mt-6 flex flex-col relative">
          <label className="text-sm" htmlFor="passwordRepeat">
            Repeat password
          </label>
          <Input
            register={register}
            h={40}
            w={320}
            placeholder={'Repeat password'}
            registerArgs={{
              required: 'This field is required',
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Password must match';
                }
              },
            }}
            id={'passwordRepeat'}
            type={'password'}
            border={Boolean(errors.passwordRepeat?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">{errors.passwordRepeat?.message as string}</span>
        </div>
        <div className="mt-6 border-t-[1px] relative">
          <label className="flex gap-3 items-start pt-2">
            <input
              {...register('checkbox', {
                validate: (val: boolean) => {
                  if (!val) {
                    return 'You should accept our terms and conditions';
                  }
                },
              })}
              type="checkbox"
              className="mt-2 w-4 h-4"
            />
            <span>I agree to the processing of my personal information</span>
          </label>
          <span className="text-sm text-red-500 absolute top-14">{errors.checkbox?.message as string}</span>
        </div>
        <div className="flex justify-center w-[320px] mt-4">
          <Button w={320} h={40} text={'Create'} classes="mt-5 text-md bg-blue-600 text-white py-3" />
        </div>
      </form>
      <div className="text-center mt-4 text-sm">
        <span>
          Already have an account?{' '}
          <Link className="text-purple-700 hover:text-pink-400 transition-colors text-base" to="/login">
            Sign In.
          </Link>
        </span>
      </div>
    </div>
  );
};
