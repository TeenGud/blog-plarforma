import { FieldValues, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

interface InputInterface {
  h: number;
  w: number;
  placeholder: string;
  id: string;
  type: string;
  register?: (name: string, options?: RegisterOptions<FieldValues, string>) => UseFormRegisterReturn<string>;
  registerArgs?: {
    required: string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (val: string) => string | undefined;
  };
  border?: boolean;
}
export const Input = ({ h, w, placeholder, id, type, register, registerArgs, border }: InputInterface) => {
  if (register) {
    return (
      <input
        {...register(id, registerArgs)}
        className={`w-[${w}px] h-[${h}px] rounded border-[1px] p-2 placeholder:text-sm placeholder:text-gray-400 ${border ? 'border-red-600' : ''}`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
      />
    );
  }
  return (
    <input
      className={`w-[${w}px] h-[${h}px] rounded border-[1px] p-2 placeholder:text-sm placeholder:text-gray-400`}
      type={type}
      placeholder={placeholder}
      id={id}
      name={id}
    />
  );
};
