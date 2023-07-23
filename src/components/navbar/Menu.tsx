import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

export default function Menu() {
  return (
    <Link
      href={'/menu'}
      className="hidden mb:inline-block hover:opacity-70 transition-opacity"
    >
      <FiMenu className="h-8 w-auto text-violet-300" />
    </Link>
  );
}
