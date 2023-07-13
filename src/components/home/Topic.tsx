import { ReactNode } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

export default function Topic({ children }: { children: ReactNode }) {
  return (
    <h1 className="flex flex-row items-center gap-2 text-violet-400">
      <BiSolidRightArrow />
      <span className="text-lg">{children}</span>
    </h1>
  );
}
