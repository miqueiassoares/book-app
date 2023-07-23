import { getBook, getQuery } from '@/api';
import Card from '@/components/book/Card';
import { BookInfoContainer } from '@/components/book/styles';
import Topic from '@/components/home/Topic';
import { Metadata } from 'next';
import BookInfo from '../../../components/book/BookInfo';

type TProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const id = params.id;

  const {
    volumeInfo: { title, description }
  } = await getBook(id);
  return {
    title: `${title} | BookTrove`,
    description: description
  };
}

export default async function Book({ params }: TProps) {
  const data = await getBook(params.id);
  const similarData = await getQuery(data.volumeInfo.title);

  return (
    <>
      <BookInfoContainer>
        <BookInfo Data={data} />
      </BookInfoContainer>
      <section className="max-w-3xl m-auto mt-8">
        <main>
          <Topic>Similar titles</Topic>
          <div className="pt-8 flex flex-col gap-4">
            {similarData ? (
              similarData
                .filter(({ id }: { id: string }) => id !== params.id)
                .map((bookData: any) => <Card bookData={bookData} />)
            ) : (
              <></>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
