'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import NotFound from './NotFound';
import {
  InfoTemplate,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalInfo,
  ModalMoreInfo
} from './styles';

interface IModalData {
  data: {
    description: string;
    isEbook: boolean;
    pageCount: number;
    buyLink: string;
    categories: string[];
    id: string;
    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    authors: string[];
    language: string;
  };
}

export default function Modal({
  data: {
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
  }
}: IModalData) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const changeModalState = (
    event: React.MouseEvent<HTMLElement>,
    disable = false
  ) => {
    if (event.target !== event.currentTarget && !disable) return;
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="p-5">
        <button
          type="button"
          className="flex flex-row gap-1 items-center bg-blue-400 p-2 rounded-md w-max text-violet-100 hover:opacity-60 transition-opacity"
          onClick={(e) => changeModalState(e, true)}
        >
          More <BsFillArrowRightCircleFill />
        </button>
        {description ? (
          description.includes('<') ? (
            <p
              className="mt-5 line-clamp-3 text-violet-300"
              dangerouslySetInnerHTML={{
                __html: description
              }}
            ></p>
          ) : (
            <p className="mt-5 line-clamp-3 text-violet-300">{description}</p>
          )
        ) : (
          <NotFound the="description" />
        )}
      </div>
      {showModal && (
        <ModalContainer onClick={changeModalState}>
          <ModalContent className="text-black">
            <ModalHeader>
              <div className="flex flex-row justify-between pr-4 pl-4 pt-4">
                <h1 className="text-2xl line-clamp-1 font-bold pt-2 pl-2">
                  {title && title} {subtitle && `- ${subtitle}`}
                </h1>
                <button
                  onClick={(e) => changeModalState(e, true)}
                  className="p-2 rounded-full"
                >
                  <GrClose className="h-5 w-auto" />
                </button>
              </div>
              <p className="text-sm pl-6 mt-2 text-slate-900">
                About this book
              </p>
            </ModalHeader>

            <ModalInfo>
              {description ? (
                description.includes('<') ? (
                  <p
                    className="p-6 text-slate-900 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: description
                    }}
                  ></p>
                ) : (
                  <p className="p-6 text-slate-900 text-sm">{description}</p>
                )
              ) : (
                <NotFound the="description" />
              )}
              <ModalMoreInfo>
                <InfoTemplate>
                  <h2>Author</h2>
                  <p>
                    {authors ? (
                      authors.map((author) => author)
                    ) : (
                      <NotFound the="author" />
                    )}
                  </p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Language</h2>
                  <p className="capitalize">{language ? language : 'En'}</p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Publisher</h2>
                  <p>{publisher ? publisher : <NotFound the="publisher" />}</p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Publication date</h2>
                  <p>
                    {publishedDate ? (
                      `${publishedDate.replace(/^(\d{4})-\d{2}-\d{2}/, '$1')}`
                    ) : (
                      <NotFound the="publishedDate" />
                    )}
                  </p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Id</h2>
                  <p>{id}</p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Is it an ebook?</h2>
                  <p>{isEbook ? 'Yes' : 'No'}</p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Pages</h2>
                  <p>{pageCount ? pageCount : <NotFound the="pageCount" />}</p>
                </InfoTemplate>
                <InfoTemplate>
                  <h2>Categories</h2>
                  <p className="line-clamp-3">
                    {categories ? (
                      categories.map((categorie) => {
                        return (
                          <>
                            {categorie}
                            <br />
                          </>
                        );
                      })
                    ) : (
                      <NotFound the="categories" />
                    )}
                  </p>
                </InfoTemplate>
                {buyLink && (
                  <Link
                    href={buyLink}
                    className="text-xs underline uppercase"
                    target="_blank"
                  >
                    Buy now
                  </Link>
                )}
              </ModalMoreInfo>
            </ModalInfo>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
