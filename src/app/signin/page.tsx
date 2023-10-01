'use client';

import { getDataUser, signInUser } from '@/api/user';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters } from 'react-icons/ai';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const userInfo = localStorage.getItem('userInfo');
  const buttonSignIn = useRef<HTMLButtonElement | null>(null);
  const [requestError, setRequestError] = useState<string | null>('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  useEffect(() => {
    if (userInfo) {
      buttonSignIn.current?.click();
    }
  }, [])

  const onSubmit: SubmitHandler<IFormInput> = async (data, event) => {
    event?.preventDefault();

    if (loading) return;
    
    setLoading(true)
    const res = await signInUser(data);

    if (res.data) {
      setRequestError(res.data.errors.default)
      setLoading(false)
      return;
    }

    if (res.accessToken) {
      setRequestError(null);
      const jwtExists = localStorage.getItem("jwt_token");

      if (!jwtExists) {
        localStorage.setItem('jwt_token', res.accessToken);
        
      } else {
        localStorage.removeItem('jwt_token');
        localStorage.setItem("jwt_token", res.accessToken);
      }

      if (!userInfo) {
        localStorage.setItem("userInfo", JSON.stringify(res.userData));
      }
      
      router.push('/')
      return;
    }

    setLoading(false)
    
  };

  return (
    <section className="max-w-3xl m-auto mt-8">
      <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setRequestError(null)}
          className="text-white bg-yellow-500 max-w-lg m-auto rounded-lg"
        >
          <fieldset className="flex flex-col gap-2 p-4">
            <legend className="text-xl pt-2">
              Log in to your BookTrove account.
            </legend>
            <label htmlFor="email">Enter your Email:</label>
            <input
              value={localStorage.getItem('userInfo') && JSON.parse(String(localStorage.getItem('userInfo'))).email}
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
            <div className="flex flex-row">
              <input
                value={localStorage.getItem('userInfo') && JSON.parse(String(localStorage.getItem('userInfo'))).password}
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
              <span className="text-xs text-red-600 underline font-bold">
                {errors.password?.message}
              </span>
            )}

            { requestError && (
              <span className="text-xs text-red-600 underline font-bold">
                {requestError}
              </span>
            )
            }
            <button
              ref={buttonSignIn}
              type="submit"
              className="bg-blue-500 p-2 rounded-lg w-56 font-bold cursor-pointer hover:opacity-70 mt-4"
            >
              {loading ? (<AiOutlineLoading3Quarters className='animate-spin m-auto'/>) : (<>Sign In</>)}
            </button>
          </fieldset>
      </form>
    </section>
  );
}
