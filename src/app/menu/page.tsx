import Logo from '@/components/navbar/Logo';
import Link from 'next/link';
import { MenuContainer } from './styles';

export default function Menu() {
  return (
    <MenuContainer>
      <menu className="flex flex-col items-center">
        <Logo />
        <div className="mt-2 flex flex-row gap-3 flex-wrap justify-center">
          <Link
            href={'/login'}
            className="uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            Login
          </Link>
          <Link
            href={'/'}
            className="uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            Home
          </Link>
          <Link
            href={'/favorites'}
            className="uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            Favorites
          </Link>
          <Link
            href={'/shelves'}
            className="uppercase bg-violet-300 text-black p-1 pr-2 pl-2 rounded-md font-bold text-base hover:opacity-70 transition-opacity"
          >
            Shelves
          </Link>
        </div>
      </menu>
    </MenuContainer>
  );
}
