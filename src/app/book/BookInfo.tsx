import Link from 'next/link';
import { AiFillStar, AiOutlineBook } from 'react-icons/ai';
import BookImage from './BookImage';
import Modal from './Modal';
import NotFound from './NotFound';
import { SideLine } from './styles';

interface IBookInfoData {
  Data: {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      publisher: string;
      publishedDate: string;
      description: string;
      pageCount: number;
      categories: string[];
      averageRating: number;
      language: string;
      imageLinks: { thumbnail: string };
    };
    saleInfo: {
      isEbook: boolean;
      buyLink: string;
      listPrice: { amount: number };
    };
  };
}

export default function BookInfo({
  Data: {
    id,
    volumeInfo: {
      title,
      subtitle,
      authors,
      publisher,
      publishedDate,
      description,
      pageCount,
      categories,
      averageRating,
      language,
      imageLinks
    },
    saleInfo: { isEbook, listPrice, buyLink }
  }
}: IBookInfoData) {
  return (
    <>
      <section className="flex flex-row justify-between p-5 ">
        <main>
          <h1 className="text-3xl text-blue-300">
            {title && title} {subtitle && `- ${subtitle}`}
          </h1>
          <div className="mt-6">
            <p className="text-sm text-violet-400">
              {authors ? (
                authors.map((author) => author)
              ) : (
                <NotFound the="author" />
              )}
            </p>
            <p className="text-xs text-violet-100">
              {publishedDate ? (
                `${publishedDate.replace(/^(\d{4})-\d{2}-\d{2}/, '$1')}`
              ) : (
                <NotFound the="publishedDate" />
              )}{' '}
              · {publisher ? publisher : <NotFound the="publisher" />}
            </p>
          </div>
          <div className=" flex flex-row text-xs items-center mt-6 text-yellow-300">
            {averageRating && (
              <>
                <span className="pr-5 gap-1 flex flex-col items-center hover:opacity-70 transition-opacity cursor-pointer">
                  <span className="flex flex-row items-center gap-1">
                    {averageRating}
                    <AiFillStar className="w-4 h-auto" />
                  </span>
                  Rating
                </span>
                <SideLine />
              </>
            )}
            {isEbook && (
              <span className=" w-20  gap-1 flex flex-col items-center hover:opacity-70 transition-opacity cursor-pointer">
                <AiOutlineBook />
                E-book
              </span>
            )}

            {pageCount && (
              <>
                <SideLine />
                <span className=" w-20  gap-1 flex flex-col items-center hover:opacity-70 transition-opacity cursor-pointer">
                  <span>{pageCount}</span>
                  Pages
                </span>
              </>
            )}
          </div>
          <Link href={buyLink ? buyLink : ''} target="_blank">
            <button
              type="button"
              className="text-violet-100 bg-violet-500 cursor-pointer p-2 rounded hover:opacity-60 transition-opacity text-base mt-8"
            >
              {listPrice?.amount ? (
                <>R$ {listPrice.amount}</>
              ) : (
                <NotFound the="amount" />
              )}
            </button>
          </Link>
        </main>
        <BookImage image={imageLinks?.thumbnail} alt={title} />
      </section>
      <hr className="h-1 w-full bg-blue-400 mt-5 mb-5" />
      <Modal
        data={{
          description,
          language,
          isEbook,
          pageCount,
          buyLink,
          categories,
          id,
          title,
          subtitle,
          publishedDate,
          publisher,
          authors
        }}
      />
    </>
  );
}
