import Link from 'next/link';

export default function ButtonComponent({
  typeB
}: {
  typeB: 'signin' | 'signup';
}) {
  return (
    <Link
      href={typeB === 'signin' ? '/signin' : '/signup'}
      className="flex flex-col w-max gap-1 items-center hover:opacity-70 transition-opacity cursor-pointer "
    >
      <button
        type="button"
        className={`text-violet-50 pr-2 pl-2 pt-1 pb-1 rounded-sm text-sm cursor-pointer focus:outline-none uppercase font-bold ${
          typeB === 'signin' ? 'bg-yellow-400 text-white' : 'bg-blue-400'
        }`}
      >
        {typeB === 'signin' ? 'Sign In' : 'Sign Up'}
      </button>
    </Link>
  );
}
