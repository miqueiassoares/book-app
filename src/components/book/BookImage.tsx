import Image from 'next/image';
import { NotFoundImageBook } from './styles';

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
        <NotFoundImageBook>Image not found</NotFoundImageBook>
      )}
    </div>
  );
}
