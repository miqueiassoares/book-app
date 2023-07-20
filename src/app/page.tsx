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
          {data ? (
            data.map((bookData: any) => <Card bookData={bookData} />)
          ) : (
            <></>
          )}
        </div>
      </main>
    </section>
  );
}
