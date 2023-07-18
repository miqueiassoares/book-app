import { getSuggestions } from '@/api';
import Card from '@/components/book/Card';
import Topic from '@/components/home/Topic';

export default async function Home() {
  const data = await getSuggestions();

  return (
    <section className="max-w-3xl m-auto mt-8">
      <main>
        <Topic>Suggestions</Topic>
        <div className="pt-8 flex flex-col gap-4">
          {data.map(
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
