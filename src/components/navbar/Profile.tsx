'use client';

import { IoIosSettings } from 'react-icons/io';
import LinkTemplate from './LinkTemplate';
import ButtonComponent from './ButtonComponent';
import { CgProfile } from 'react-icons/cg'  
import Link from 'next/link';

export default function Profile() {

  const userData = localStorage.getItem('userInfo');

  return (
    <div className="flex flex-row items-center gap-10 mb:scale-90 mbx:hidden">
      <LinkTemplate href={'/settings'} target="_blank">
        <IoIosSettings className="h-6 w-auto" />
        Settings
      </LinkTemplate>
      <div className="flex flex-col gap-1 items-center">
        { userData ? (
          <Link href={'/settings'} target='_blank' className='flex flex-col gap-1 items-center cursor-pointer hover:opacity-70 transition-opacity'>
            <CgProfile className='text-purple-400 text-5xl'/>
            <p className='text-blue-400 text-xs' >{JSON.parse(userData).username}</p>
            
          </Link>
        ) : (
          <>
            <ButtonComponent typeB="signin" />
          <ButtonComponent typeB="signup" />
          </>
        )

        }
      </div>
    </div>
  );
}
