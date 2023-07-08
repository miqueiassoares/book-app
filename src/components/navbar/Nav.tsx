import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href={'/favorites'}>Favorites</Link>
      <Link href={'/personallibrary'}>Personal library</Link>
    </nav>
  );
}
