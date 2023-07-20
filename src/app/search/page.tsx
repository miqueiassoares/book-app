import { getQuery } from '@/api';
import Card from '@/components/book/Card';
import Topic from '@/components/home/Topic';

export default async function Search({
  searchParams
}: {
  searchParams: { q: string };
}) {
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
