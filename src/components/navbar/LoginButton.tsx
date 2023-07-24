import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

export default function LoginButton({ avatar }: { avatar?: boolean }) {
  return (
    <Link
      href={'/login'}
      className="flex flex-col w-max gap-1 items-center hover:opacity-70 transition-opacity cursor-pointer "
    >
      {avatar && (
        <div>
          <CgProfile className="w-auto h-12 text-violet-50 bg-blue-400 rounded-full" />
        </div>
      )}
      <button
        type="button"
        className="bg-blue-400 text-violet-50 pr-2 pl-2 rounded-sm text-sm cursor-pointer focus:outline-none"
      >
        Login
      </button>
    </Link>
  );
}
