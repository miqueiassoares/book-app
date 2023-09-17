import Topic from '@/components/home/Topic';
import { FaPlus } from 'react-icons/fa6';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Shelves',
    description: 'Your shelves.'
  };
}

export default function Shelves() {
  return (
    <section className="max-w-3xl m-auto mt-8">
      <main>
        <Topic>Shelves: </Topic>
        <button
          type="button"
          className="flex flex-row bg-blue-500 text-white font-bold items-center justify-center text-sm p-1 rounded gap-2 hover:opacity-70 mt-2 w-max"
        >
          <span>Create a shelf</span>
          <FaPlus className="h-auto w-4" />
        </button>
        <div className="mt-14 flex flex-col gap-4">
          <p className="text-white text-center">
            You don't have shelves yet. You can create them by clicking the blue
            button below.
          </p>
          <button
            type="button"
            className="m-auto flex flex-row bg-blue-500 text-white font-bold items-center justify-center text-sm p-1 rounded gap-2 hover:opacity-70 mt-2 w-max"
          >
            <span>Create a shelf</span>
            <FaPlus className="h-auto w-4" />
          </button>
        </div>
      </main>
    </section>
  );
}
