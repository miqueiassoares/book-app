'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

interface IFormInput {
  fullName: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  age: number;
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

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
        className="text-white bg-blue-500 max-w-lg m-auto rounded-lg"
      >
        <fieldset className="flex flex-col gap-2 p-4">
          <legend className="text-xl pt-2">
            Create your BookTrove account for free and get more features.
          </legend>
          <label htmlFor="name">Your full name:</label>
          <input
            id="name"
            className="text-black text-sm p-1 rounded-md"
            {...register('fullName', {
              required: 'Please enter your full name.',
              maxLength: {
                value: 100,
                message: 'This field must have a maximum of 100 characters'
              },
              minLength: {
                value: 3,
                message: 'This field must have at least 3 characters.'
              },
              pattern: {
                value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                message: 'Full name must be valid.'
              }
            })}
            placeholder="Full name"
          />
          {errors.fullName && (
            <span className="text-xs text-red-800 underline font-bold">
              {errors.fullName?.message}
            </span>
          )}
          <label htmlFor="username">Enter your username:</label>
          <input
            id="username"
            className="text-black text-sm p-1 rounded-md"
            {...register('username', {
              required: 'Please enter your username.',
              maxLength: {
                value: 10,
                message: 'This field must have a maximum of 10 characters'
              },
              minLength: {
                value: 4,
                message: 'This field must have at least 4 characters.'
              },
              pattern: {
                value: /^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/,
                message:
                  'Username must be valid. Username must contain letters and numbers.'
              }
            })}
            placeholder="Username"
          />
          {errors.username && (
            <span className="text-xs text-red-800 underline font-bold">
              {errors.username?.message}
            </span>
          )}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="gender">Enter your gender:</label>
              <select
                id="gender"
                {...register('gender')}
                className="text-black text-sm p-1 rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="age">Enter your Age:</label>
              <input
                id="age"
                className="text-black text-sm p-1 rounded-md"
                {...register('age', {
                  required: 'Please enter your age.',
                  max: {
                    value: 120,
                    message: 'Please enter a valid age.'
                  },
                  min: {
                    value: 13,
                    message:
                      'You must be over 13 years old to register on this platform.'
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Age must be valid.'
                  }
                })}
                type="number"
                placeholder="Age"
              />
              {errors.age && (
                <span className="text-xs text-red-800 underline font-bold">
                  {errors.age?.message}
                </span>
              )}
            </div>
          </div>

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
            <span className="text-xs text-red-800 underline font-bold">
              {errors.email?.message}
            </span>
          )}
          <label htmlFor="password">Enter your password:</label>
          <div className="flex flex-row">
            <input
              className="text-black text-sm p-1 rounded-s-md w-full"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
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
            <button
              type="button"
              className="w-1/12 flex items-center justify-center bg-white rounded-e-md text-black"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              <AiFillEyeInvisible
                className={`w-5 h-auto hover:opacity-70 ${
                  showPassword && 'hidden'
                }`}
              />
              <AiFillEye
                className={`w-5 h-auto hover:opacity-70 ${
                  !showPassword && 'hidden'
                }`}
              />
            </button>
          </div>
          {errors.password && (
            <span className="text-xs text-red-800 underline font-bold">
              {errors.password?.message}
            </span>
          )}
          <button
            type="submit"
            className="bg-yellow-500 p-2 rounded-lg w-56 font-bold cursor-pointer hover:opacity-70 mt-4"
          >
            Sign In
          </button>
        </fieldset>
      </form>
    </section>
  );
}
