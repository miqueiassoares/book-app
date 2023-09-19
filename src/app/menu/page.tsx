import Logo from '@/components/navbar/Logo';
import { Metadata } from 'next';
import Link from 'next/link';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { BiSolidLogInCircle } from 'react-icons/bi';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FaSheetPlastic } from 'react-icons/fa6';
import { GiBookshelf } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Menu',
    description: 'Menu'
  };
}

export default function Menu() {
  return (
    <div className="absolute top-0 left-0  min-h-screen h-full w-screen z-50 bg-black flex flex-row items-center justify-center">
      <menu className="flex flex-col items-center">
        <Logo />
        <div className="mt-2 flex flex-row gap-3 flex-wrap justify-center">
          <Link
            href={'/signin'}
            className="flex flex-row gap-1 items-center uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <BiSolidLogInCircle className="h-5 w-auto" />
            Sign In
          </Link>
          <Link
            href={'/signup'}
            className="flex flex-row gap-1 items-center uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <BiSolidLogInCircle className="h-5 w-auto" />
            Sign Up
          </Link>
          <Link
            href={'/'}
            className="flex flex-row gap-1 uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <AiFillHome className="h-5 w-auto" />
            Home
          </Link>
          <Link
            href={'/favorites'}
            className="flex flex-row gap-1 items-center uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <AiFillStar className="h-5 w-auto" />
            Favorites
          </Link>
          <Link
            href={'/shelves'}
            className="flex flex-row gap-1 uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <GiBookshelf className="h-5 w-auto" />
            Shelves
          </Link>
          <Link
            href={'/settings'}
            className="flex flex-row gap-1 uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <IoIosSettings className="h-6 w-auto" />
            Settings
          </Link>
          <Link
            href="/about"
            className="flex flex-row gap-1 items-center uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <FaSheetPlastic className="h-4 w-auto" />
            About
          </Link>
          <Link
            href="https://developers.google.com/books/docs/overview"
            target="_blank"
            className="flex flex-row gap-1 items-center uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <BsGoogle className="h-4 w-auto" />
            Books Api
          </Link>
          <Link
            href="https://github.com/miqueiassoares/book-app"
            target="_blank"
            className="flex flex-row gap-1 items-center uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            <BsGithub className="h-4 w-auto" />
            Git Hub
          </Link>
        </div>
      </menu>
    </div>
  );
}
