import Link from 'next/link';
import { BsBookHalf } from 'react-icons/bs';
import ImageCard from './ImageCard';
import { CardStyle } from './styles';

export interface ICardDataTemplate {
  bookData: {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      description: string;
      pageCount: number;
      publishedDate: string;
      imageLinks: { thumbnail: string; smallThumbnail: string };
    };
    saleInfo: { isEbook: boolean };
  };
}

export default function Card({
  bookData: {
    id,
    volumeInfo: {
      title,
      subtitle,
      authors,
      description,
      pageCount,
      publishedDate,
      imageLinks
    },
    saleInfo: { isEbook }
  }
}: ICardDataTemplate) {
  return (
    <CardStyle key={id}>
      {imageLinks?.thumbnail ? (
        <ImageCard src={imageLinks.thumbnail} alt={title} />
      ) : (
        <ImageCard src={''} alt={title} />
      )}
      <div className="flex flex-col w-full p-2 relative">
        <h2 className="text-2xl text-blue-300 line-clamp-2">
          {title} {subtitle ? `- ${subtitle}` : ''}
        </h2>
        <p className="text-white mt-2">
          {authors ? (
            <span className="text-violet-400">{authors[0]}</span>
          ) : (
            <span className="text-red-500">Author not found</span>
          )}

          {publishedDate && (
            <span className="text-xs">
              {' '}
              - {publishedDate.replace(/^(\d{4})-\d{2}-\d{2}/, '$1')}{' '}
            </span>
          )}
          {isEbook && (
            <span className="text-yellow-400 text-xs font-bold uppercase">
              | Ebook
            </span>
          )}
        </p>
        <p className="mt-1 text-violet-100 line-clamp-6 text-sm">
          {description ? (
            description
          ) : (
            <span className="text-red-500">
              Sorry. There is no description for this book at this time.
            </span>
          )}
        </p>
        <Link href={`/book/${id}`} className="w-max absolute bottom-0 ">
          <button
            type="button"
            className="text-violet-100 bg-violet-500 cursor-pointer p-2 rounded hover:opacity-60 transition-opacity"
          >
            More about
          </button>
        </Link>
        <p className="flex gap-1 text-sm text-violet-500 items-center absolute bottom-0 right-0">
          {pageCount ? (
            <>
              <BsBookHalf />
              {`${pageCount} pages`}
            </>
          ) : (
            <span className="text-red-500">Unknown number of pages</span>
          )}
        </p>
      </div>
    </CardStyle>
  );
}
