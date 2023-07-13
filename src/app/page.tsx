import { getHome } from '@/api';
import Card from '@/components/books/Card';
import Topic from '@/components/home/Topic';

export default async function Home() {
  const data = await getHome();

  return (
    <main className="max-w-3xl m-auto mt-8">
      <section>
        <Topic>Suggestions</Topic>
        <div className="pt-8 flex flex-col gap-4">
          {data.items.map(
            ({
              id,
              volumeInfo: {
                title,
                subtitle,
                authors,
                description,
                pageCount,
                publishedDate,
                imageLinks: { thumbnail }
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
                  thumbnail={thumbnail}
                />
              );
            }
          )}
        </div>
      </section>
    </main>
  );
}
