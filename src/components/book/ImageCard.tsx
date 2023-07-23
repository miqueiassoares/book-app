import Image from 'next/image';
import { NotFoundImageCard } from './styles';

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
        <NotFoundImageCard>Image not found</NotFoundImageCard>
      )}
    </>
  );
}
