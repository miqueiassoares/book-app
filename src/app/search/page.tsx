import { getQuery } from '@/api';
import Card from '@/components/book/Card';
import Topic from '@/components/home/Topic';
import { Metadata } from 'next';

type TProps = {
  searchParams: { q: string };
};

export async function generateMetadata({
  searchParams
}: TProps): Promise<Metadata> {
  const query = searchParams.q;
  return {
    title: `${query}`,
    description: query
  };
}

export default async function Search({ searchParams }: TProps) {
  const data = await getQuery(searchParams.q);

  return (
    <section className="max-w-3xl m-auto mt-8">
      <main>
        <Topic>{searchParams.q}</Topic>
        <div className="pt-8 flex flex-col gap-4">
          {data &&
            data.map((bookData: any) => {
              return <Card bookData={bookData} />;
            })}
        </div>
      </main>
    </section>
  );
}
