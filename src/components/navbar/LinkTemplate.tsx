import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkTemplate({
  children,
  href
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-violet-400 underline uppercase font-bold focus:outline-none hover:opacity-60 transition-opacity"
    >
      {children}
    </Link>
  );
}
