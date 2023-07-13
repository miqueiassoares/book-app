'use client';

import Image from 'next/image';

export default function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={165.5}
      height={250}
      className="rounded-md"
    />
  );
}
