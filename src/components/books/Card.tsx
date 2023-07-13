import Image from 'next/image';
import Link from 'next/link';
import livroTemplate from '../../../public/livroTemplate.jpg';
import { CardStyle } from './styles';

export default function Card() {
  return (
    <CardStyle>
      <Image
        src={livroTemplate}
        alt="Daisy Jones And The Six"
        width={165.5}
        height={250}
        className="rounded-md"
      />
      <div className="flex flex-col w-full p-2 relative">
        <h2 className="text-2xl text-violet-300">
          Daisy Jones And The Six - Uma história de amor e música
        </h2>
        <p className="text-white mt-3">
          <span className="text-violet-400">Taylor Jenkins Reid</span> - 2019
        </p>
        <p className="text-base mt-1 text-violet-100 line-clamp-6">
          A gripping novel about the whirlwind rise of an iconic 1970s rock
          group and their beautiful lead singer, revealing the mystery behind
          their infamous breakup—from the author of The Seven Husbands of Evelyn
          Hugo, Malibu Rising, and Carrie . Hugo, Malibu Rising, and Carrie .
        </p>
        <Link href={'/book/${}'} className="w-max absolute bottom-0 ">
          <button
            type="button"
            className="text-violet-100 bg-violet-500 cursor-pointer p-2 rounded hover:opacity-60 transition-opacity"
          >
            More about
          </button>
        </Link>
      </div>
    </CardStyle>
  );
}
