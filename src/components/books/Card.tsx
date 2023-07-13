import Link from 'next/link';
import { BsBookHalf } from 'react-icons/bs';
import ImageCard from './ImageCard';
import { CardStyle } from './styles';
export interface ICardDataTemplate {
  title: string;
  subtitle: string;
  authors: Array<string>;
  thumbnail: string;
  description: string;
  publishedDate: string;
  pageCount: number;
  id: string;
}

export default function Card({
  title,
  subtitle,
  authors,
  thumbnail,
  description,
  publishedDate,
  pageCount,
  id
}: ICardDataTemplate) {
  return (
    <CardStyle key={id}>
      <ImageCard src={thumbnail} alt={title} />
      <div className="flex flex-col w-full p-2 relative">
        <h2 className="text-2xl text-violet-300 line-clamp-2">
          {title} {subtitle ? `- ${subtitle}` : ''}
        </h2>
        <p className="text-white mt-3">
          <span className="text-violet-400">{authors[0]}</span>{' '}
          {publishedDate
            ? `- ${publishedDate.replace(/^(\d{4})-\d{2}-\d{2}/, '$1')}`
            : ''}
        </p>
        <p className="text-base mt-1 text-violet-100 line-clamp-6">
          {description}
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
          <BsBookHalf />
          {pageCount} pages
        </p>
      </div>
    </CardStyle>
  );
}
