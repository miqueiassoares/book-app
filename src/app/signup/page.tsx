'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { signUpUser } from '@/api/user';
import { useRouter } from 'next/navigation';

interface IFormInput {
  fullname: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  dateofbirth: Date;
}

function dateValidation(dateofbirth: Date) {
  const userDate = new Date(dateofbirth);
  
  const dateNow = new Date();
  
  
  const diff = Number(dateNow) - Number(userDate);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  
  return age;
}


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [DateOfBirthStatus, setDateOfBirthStatus] = useState("");
  const [errorSignUp, setErrorSignUp] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      router.push('/')
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {

    setErrorSignUp('')
    const age = dateValidation(data.dateofbirth);

    if (age <= 12 || age >= 119) {
      setDateOfBirthStatus("Invalid date.");
      return;
    }

    const res = await signUpUser(data);

    if (typeof res === 'number') {
      localStorage.setItem('userInfo', JSON.stringify({
        ...data,
        userid: Number(res)
      }))

      router.push('/signin');
    } else {
      setErrorSignUp('Unable to register. It is likely that this email or username is already being used by someone else.')
    }

  };

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
            {...register('fullname', {
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
          {errors.fullname && (
            <span className="text-xs text-red-800 underline font-bold">
              {errors.fullname?.message}
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="dateofbirth">Date of birth:</label>
              <input
                id="dateofbirth"
                className="text-black text-sm p-1 rounded-md"
                {...register('dateofbirth', {
                  required: 'Date of birth is required.',
                  valueAsDate: true,
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const age = dateValidation(new Date(event.target.value))
                    
                    if (age <= 12) {
                      setDateOfBirthStatus("You must be at least 13 years old to use Booktrove");
                      return
                    }
                    if (age >= 120) {
                      setDateOfBirthStatus("Enter a valid age.");
                      return
                    }
                    
                    setDateOfBirthStatus("")
                  }
                })}
                type="date"
                placeholder="Date of birth"
              />
              {errors.dateofbirth && (
                <span className="text-xs text-red-800 underline font-bold">
                  {errors.dateofbirth?.message}
                </span>
              )}
              {DateOfBirthStatus.length > 0 && (
                <span className="text-xs text-red-800 underline font-bold">
                  {DateOfBirthStatus}
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
            Sign Up
          </button>
          {errorSignUp && (
            <span className="text-xs text-red-800 underline font-bold">
              {errorSignUp}
            </span>
          )}
        </fieldset>
      </form>
    </section>
  );
}
