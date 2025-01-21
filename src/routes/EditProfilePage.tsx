import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const EditProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-[384px] h-[600px] py-12 px-8 rounded-md border-[1px] shadow-sm bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Edit profile</h1>
      <form
        className="mt-5"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
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
            register={register}
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
            New password
          </label>
          <Input
            w={320}
            h={40}
            placeholder="New password"
            id="password"
            type="password"
            register={register}
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
            register={register}
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
        <Button w={320} h={40} classes="bg-blue-600 text-white mt-10 py-3" text="Save" />
      </form>
    </div>
  );
};
