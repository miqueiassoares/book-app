'use client';

import Image from 'next/image';
import styled from 'styled-components';

const NotFound = styled.div`
  background-color: #60418f;
  color: white;
  height: 288px;
  width: 256px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      {src ? (
        <div className="relative h-72 w-64">
          <Image
            src={src}
            alt={alt}
            fill
            quality={100}
            className="rounded-md object-cover"
          />
        </div>
      ) : (
        <NotFound>Image not found</NotFound>
      )}
    </>
  );
}
