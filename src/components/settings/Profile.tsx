'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface IFormInput {
  fullName: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  age: number;
}

const prevData = {
  fullName: 'Miquéias Castro',
  username: 'mika01',
  gender: 'male',
  email: 'miqueias@gmail.com',
  password: 'MIKE007seagain99.22',
  age: 17
};

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <h2>You can edit your profile and update your information here.</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4"
      >
        <label htmlFor="name">Edit your full name:</label>
        <input
          id="name"
          defaultValue={'Miquéias Castro'}
          className="text-black text-sm p-1 rounded-md"
          {...register('fullName', {
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
        <label htmlFor="username">Edit your username:</label>
        <input
          id="username"
          defaultValue={'mika01'}
          className="text-black text-sm p-1 rounded-md"
          {...register('username', {
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
            <label htmlFor="gender">Edit your gender:</label>
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
            <label htmlFor="age">Edit your Age:</label>
            <input
              id="age"
              defaultValue={17}
              className="text-black text-sm p-1 rounded-md"
              {...register('age', {
                max: {
                  value: 120,
                  message: 'Please Edit a valid age.'
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

        <label htmlFor="email">Edit your Email:</label>
        <input
          id="email"
          defaultValue={'miqueias@gmail.com'}
          className="text-black text-sm p-1 rounded-md"
          {...register('email', {
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
        <label htmlFor="password">Edit your password:</label>
        <div className="flex flex-row">
          <input
            className="text-black text-sm p-1 rounded-s-md w-full"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            defaultValue={'MIKE007seagain99.22'}
            {...register('password', {
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
            className="w-1/12 flex flex-row items-center justify-center bg-white rounded-e-md text-black"
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
          Save your changes
        </button>
      </form>
    </div>
  );
}
