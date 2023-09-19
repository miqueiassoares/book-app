'use client';

import Logo from '@/components/navbar/Logo';
import Profile from '@/components/settings/Profile';
import Recomendations from '@/components/settings/Recomendations';
import { useState } from 'react';

export default function Settings() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="absolute top-0 left-0  min-h-screen h-max w-screen z-50 bg-black text-white">
      <div className="w-max mt-8 m-auto">
        <Logo />
      </div>
      <div className="max-w-3xl m-auto mt-8 pb-5 flex flex-row gap-3 semb:flex-col semb:p-4">
        <menu className="flex flex-col gap-1 semb:flex-row semb:m-auto semb:w-max semb:gap-3">
          <button
            type="button"
            onClick={() => setDisplay((prevState) => !prevState)}
            className={`font-bold text-base text-start p-1 rounded hover:opacity-70 ${
              display
                ? 'bg-purple-400 text-white'
                : 'bg-transparent text-purple-400'
            }`}
          >
            Profile
          </button>
          <button
            type="button"
            onClick={() => setDisplay((prevState) => !prevState)}
            className={`font-bold text-base text-start p-1 rounded hover:opacity-70 ${
              !display
                ? 'bg-purple-400 text-white'
                : 'bg-transparent text-purple-400'
            }`}
          >
            Recommendations
          </button>
        </menu>
        {display ? <Profile /> : <Recomendations />}
      </div>
    </div>
  );
}
