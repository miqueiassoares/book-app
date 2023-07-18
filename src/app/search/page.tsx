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
            data.map(
              ({
                id,
                volumeInfo: {
                  title,
                  subtitle,
                  authors,
                  description,
                  pageCount,
                  publishedDate,
                  imageLinks
                }
              }: any) => {
                return (
                  <Card
                    title={title}
                    subtitle={subtitle}
                    authors={authors}
                    description={description}
                    id={id}
                    pageCount={pageCount}
                    publishedDate={publishedDate}
                    image={imageLinks}
                  />
                );
              }
            )}
        </div>
      </main>
    </section>
  );
}
