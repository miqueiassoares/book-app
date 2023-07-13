import { getHome } from '@/api';
import Card from '@/components/books/Card';
import { BiSolidRightArrow } from 'react-icons/bi';
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
        <h1 className="flex flex-row items-center gap-2 text-violet-400">
          <BiSolidRightArrow />
          <span className="text-lg">Suggestions</span>
        </h1>
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
