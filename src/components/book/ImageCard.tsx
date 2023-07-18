'use client';

import Image from 'next/image';
import styled from 'styled-components';

const NotFound = styled.div`
  background-color: #60418f;
  color: white;
  height: auto;
  min-height: 300px;
  min-width: 165.5px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={198.6}
          height={300}
          className="rounded-md h-72 w-auto"
        />
      ) : (
        <NotFound>Image not found</NotFound>
      )}
    </>
  );
}
