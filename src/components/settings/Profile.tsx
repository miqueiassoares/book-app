'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';
import ButtonComponent from '../navbar/ButtonComponent';

interface IFormInput {
  fullname: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  dateofbirth: Date | string;
}

interface IFormInputOptional {
  fullname?: string;
  username?: string;
  gender?: string;
  email?: string;
  password?: string;
  dateofbirth?: Date | string;
}

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [dateError, setDateError] = useState(false)
  const userData: IFormInput | undefined = localStorage.getItem('userInfo') ? JSON.parse(String(localStorage.getItem('userInfo'))) : undefined;
  const [newData, setNewData] = useState<IFormInputOptional | undefined>({});
  const [saveOn, setSaveOn] = useState(false);
  const [alert, setAlert] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    
    console.log(newData);
    
    
  };

  const logOut = () => {
    localStorage.clear();
    location.reload();
  }
  
  function dateValidation(dateofbirth: Date) {
    const userDate = new Date(dateofbirth);
    
    const dateNow = new Date();
    
    const diff = Number(dateNow) - Number(userDate);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    
    return age;
  }

  return (
    <>
      { userData ? 
        (
          <div className="w-full">
            <h2>You can edit your profile and update your information here.</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 p-4"
            >
              <label htmlFor="name">Edit your full name:</label>
              <input
                id="name"
                defaultValue={userData.fullname}
                className="text-black text-sm p-1 rounded-md"
                {...register('fullname', {
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
                onChange={(event) => {
                  if (String(event.target.value) !== String(userData.fullname)) {
                    setNewData((prevState) => {
                      if (prevState) {
                        const newState = {...prevState, fullname: String(event.target.value)}
                        return newState
                      }
                    });
                    setSaveOn(true);
                    
                  } else if (newData && newData.fullname) {
                    delete newData.fullname
                    if (Object.keys(newData).length < 1) {
                      setSaveOn(false);
                    }
                  }
                  
                }}
                placeholder="Full name"
              />
              {errors.fullname && (
                <span className="text-xs text-red-800 underline font-bold">
                  {errors.fullname?.message}
                </span>
              )}
              <label htmlFor="username">Edit your username:</label>
              <input
                id="username"
                defaultValue={userData.username}
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
                onChange={(event) => {
                  if (String(event.target.value) !== String(userData.username)) {
                    setNewData((prevState) => {
                      if (prevState) {
                        const newState = {...prevState, username: String(event.target.value)}
                        return newState
                      }
                    });
                    setSaveOn(true);
                  } else if (newData && newData.username) {
                    delete newData.username
                    if (Object.keys(newData).length < 1) {
                      setSaveOn(false);
                    }
                  }
                  
                }}
                placeholder="Username"
              />
              {errors.username && (
                <span className="text-xs text-red-800 underline font-bold">
                  {errors.username?.message}
                </span>
              )}
              <div className="grid grid-cols-2 gap-2 semb:flex semb:flex-col">
                <div className="flex flex-col">
                  <label htmlFor="gender">Edit your gender:</label>
                  <select
                    id="gender"
                    {...register('gender')}
                    onChange={(event) => {
                      if (String(event.target.value) !== String(userData.gender).toLowerCase()) {
                        setNewData((prevState) => {
                          if (prevState) {
                            const newState = {...prevState, gender: String(event.target.value)}
                            return newState
                          }
                        });
                        
                        setSaveOn(true);
                      } else if (newData && newData.gender) {
                        delete newData.gender
                        if (Object.keys(newData).length < 1) {
                          setSaveOn(false);
                        }
                      }
                      
                    }}
                    className="text-black text-sm p-1 rounded-md"
                  >
                    <option selected={userData.gender.toLowerCase() === "male"} value="male">Male</option>
                    <option selected={userData.gender.toLowerCase() === "female"} value="female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dateofbirth">Edit your date of birth:</label>
                  <input
                    id="dateofbirth"
                    defaultValue={String(userData?.dateofbirth).slice(0, 10)}
                    className="text-black text-sm p-1 rounded-md"
                    {...register('dateofbirth')}
                    onChange={(event) => {
                      const age = dateValidation(new Date(event.target.value));
                      
                      if (age < 13 || age > 119) {
                        setDateError(true)
                      } else {
                        setDateError(false)
                      }

                      if (String(event.target.value).slice(0, 10) !== String(userData.dateofbirth).slice(0, 10)) {
                        setNewData((prevState) => {
                          if (prevState) {
                            const newState = {...prevState, dateofbirth: new Date(String(event.target.value))}
                            return newState
                          }
                        });
                        
                        setSaveOn(true);
                      } else if (newData && newData.dateofbirth) {
                        delete newData.dateofbirth
                        
                        if (Object.keys(newData).length < 1) {
                          setSaveOn(false);
                        }
                      }
                      
                    }}
                    type="date"
                    placeholder="Your age"
                  />
                {dateError && (
                  <span className="text-xs text-red-800 underline font-bold">
                    This date must be valid
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
                onChange={(event) => {
                  if (String(event.target.value) !== String(userData.email)) {
                    setNewData((prevState) => {
                      if (prevState) {
                        const newState = {...prevState, email: String(event.target.value)}
                        return newState
                      }
                    });
                    setSaveOn(true);      
                  } else if (newData && newData.email) {
                    delete newData.email
                    
                    if (Object.keys(newData).length < 1) {
                      setSaveOn(false);
                    }
                  }
                }}
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
                  onChange={(event) => {
                    if (String(event.target.value) !== String(userData.password)) {
                      setNewData((prevState) => {
                        if (prevState) {
                          const newState = {...prevState, password: String(event.target.value)}
                          return newState
                        }
                      });
                      setSaveOn(true);
                    } else if (newData && newData.password) {
                      delete newData.password
                      if (Object.keys(newData).length < 1) {
                        setSaveOn(false);
                      }
                    }
                  }}
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
              <div className="flex flex-row gap-3  mt-4 semb:flex-wrap">
                <button
                  type="submit"
                  className={`border-b-2 transition-allf  border-purple-500   p-2 rounded-lg w-36 font-bold cursor-pointer ${saveOn === true ? 'bg-purple-500 hover:bg-transparent' : 'hover:bg-purple-500 bg-transparent'}`}
                  
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-transparent p-2 rounded-lg transition-all font-bold cursor-pointer hover:bg-sky-500 border-b-2 border-sky-500 flex flex-row gap-2 items-center w-max"
                  onClick={() => logOut()}
                >
                  <span>log out</span>
                  <BiLogOut />
                </button>
                <button
                  type="button"
                  className="bg-transparent p-2 rounded-lg transition-all font-bold cursor-pointer border-b-2 border-red-500 hover:bg-red-500 flex flex-row gap-2 items-center w-max"
                  onClick={() => {
                    setAlert(true);
                  }}
                >
                  <span>Delete account</span>
                  <BsFillTrashFill />
                </button>
              </div>
            </form>
            {alert && (
              <div className='absolute top-0 left-0 o z-50 bg-black w-screen h-screen flex justify-center items-center'>
                <div>
                  <p>By proceeding with this action, all data including the account will be deleted from the website and will never be recovered again.</p>
                  <div>
                    <button onClick={() => setAlert(false)}>Cancel</button>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : 
        (
          <div className='flex flex-row gap-3 justify-center w-full text-purple-400'>
            <ButtonComponent typeB='signup'/>
            or
            <ButtonComponent typeB='signin' />
          </div>
        )
      }
      
    </>
  );
}
