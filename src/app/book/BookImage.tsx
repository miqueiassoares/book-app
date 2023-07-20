'use client';

import Image from 'next/image';
import styled from 'styled-components';

const NotFound = styled.div`
  background-color: #60418f;
  color: white;
  height: auto;
  min-height: 288px;
  min-width: 192px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BookImage({
  image,
  alt
}: {
  image: string | undefined;
  alt: string;
}) {
  return (
    <div>
      {image ? (
        <div className="relative h-72 w-48 shadow-indigo-500 rounded-md shadow-md">
          <Image
            src={image}
            alt={alt}
            fill
            quality={100}
            className="rounded-md object-cover"
          />
        </div>
      ) : (
        <NotFound>Image not found</NotFound>
      )}
    </div>
  );
}
