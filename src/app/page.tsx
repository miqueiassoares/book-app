import { getHome } from '@/api';
import Card from '@/components/books/Card';
import Topic from '@/components/home/Topic';
interface bookDataTemplate {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  description: string;
  publisherDate: string;
  pageCount: number;
  id: string;
}

export default async function Home() {
  const data = await getHome();

  return (
    <main className="max-w-3xl m-auto mt-8">
      <section>
        <Topic>Suggestions</Topic>
        <div className="pt-8 flex flex-col gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
