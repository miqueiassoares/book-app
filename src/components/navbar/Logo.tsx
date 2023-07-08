import Image from 'next/image';
import Link from 'next/link';
import bookImg from '../../../public/bookImg.png';

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className="flex  w-max items-cente gap-2">
        <Image
          src={bookImg}
          alt="Book"
          width={32}
          height={32}
          className="w-auto h-8"
        />
        <h1 className="text-3xl text-violet-200">BookTrove</h1>
      </div>
    </Link>
  );
}
