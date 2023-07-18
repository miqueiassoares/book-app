import Link from 'next/link';
import { BsBookHalf } from 'react-icons/bs';
import ImageCard from './ImageCard';
import { CardStyle } from './styles';
export interface ICardDataTemplate {
  title: string;
  subtitle: string;
  authors: Array<string>;
  description: string;
  publishedDate: string;
  pageCount: number;
  id: string;
  image: { thumbnail: string; smallThumbnail: string } | undefined;
}

export default function Card({
  title,
  subtitle,
  authors,
  image,
  description,
  publishedDate,
  pageCount,
  id
}: ICardDataTemplate) {
  return (
    <CardStyle key={id}>
      {image?.thumbnail ? (
        <ImageCard src={image.thumbnail} alt={title} />
      ) : (
        <ImageCard src={''} alt={title} />
      )}
      <div className="flex flex-col w-full p-2 relative">
        <h2 className="text-2xl text-violet-300 line-clamp-2">
          {title} {subtitle ? `- ${subtitle}` : ''}
        </h2>
        <p className="text-white mt-2">
          <span className="text-violet-400">
            {authors
              ? authors.map((author) => `${author} `)
              : 'Author not found'}
          </span>
          {publishedDate
            ? `- ${publishedDate.replace(/^(\d{4})-\d{2}-\d{2}/, '$1')}`
            : ''}
        </p>
        <p className="text-base mt-0 text-violet-100 line-clamp-6">
          {description ? (
            description
          ) : (
            <span className="text-red-500">
              Sorry. There is no description for this book at this time.
            </span>
          )}
        </p>
        <Link href={'/book/${}'} className="w-max absolute bottom-0 ">
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
              {pageCount}
              pages
            </>
          ) : (
            <span className="text-red-500">Unknown number of pages</span>
          )}
        </p>
      </div>
    </CardStyle>
  );
}
