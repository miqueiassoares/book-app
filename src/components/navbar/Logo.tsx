import Link from 'next/link';
import { GiBookCover } from 'react-icons/gi';

export default function Logo() {
  return (
    <Link
      href={'/'}
      className="focus:outline-none hover:opacity-70 transition-opacity"
    >
      <div className="flex w-max items-center gap-2">
        {/* <Image src={bookImg} alt="Book" className="w-auto h-8" /> */}
        <GiBookCover className="w-auto h-8 text-violet-300" />
        <h1 className="text-3xl text-violet-300">BookTrove</h1>
      </div>
    </Link>
  );
}
