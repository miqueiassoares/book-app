import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkTemplate({
  children,
  href,
  target
}: {
  children: ReactNode;
  href: string;
  target?: '_self' | string;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-violet-400 underline uppercase font-bold focus:outline-none hover:opacity-60 transition-opacity flex items-center"
      target={target}
    >
      {children}
    </Link>
  );
}
