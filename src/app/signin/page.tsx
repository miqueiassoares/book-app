'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section className="max-w-3xl m-auto mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-white bg-yellow-500 max-w-lg m-auto rounded-lg"
      >
        <fieldset className="flex flex-col gap-2 p-4">
          <legend className="text-xl pt-2">
            Log in to your BookTrove account.
          </legend>
          <label htmlFor="email">Enter your Email:</label>
          <input
            id="email"
            className="text-black text-sm p-1 rounded-md"
            {...register('email', {
              required: 'Please enter your email.',
              maxLength: {
                value: 100,
                message: 'This field must have a maximum of 100 characters'
              },
              minLength: {
                value: 5,
                message: 'This field must have at least 5 characters.'
              },
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email must be valid.'
              }
            })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-xs text-red-600 underline font-bold">
              {errors.email?.message}
            </span>
          )}
          <label htmlFor="password">Enter your password:</label>
          <input
            className="text-black text-sm p-1 rounded-md"
            placeholder="Password"
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required.',
              maxLength: {
                value: 30,
                message: 'This field must have a maximum of 30 characters'
              },
              minLength: {
                value: 6,
                message: 'This field must have at least 6 characters.'
              }
            })}
          />
          {errors.password && (
            <span className="text-xs text-red-600 underline font-bold">
              {errors.password?.message}
            </span>
          )}
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-lg w-56 font-bold cursor-pointer hover:opacity-70 mt-4"
          >
            Sign In
          </button>
        </fieldset>
      </form>
    </section>
  );
}
