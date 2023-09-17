import Topic from '@/components/home/Topic';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Favorites',
    description: 'Your favorites books.'
  };
}

export default function Favorites() {
  return (
    <section className="max-w-3xl m-auto mt-8">
      <main>
        <Topic>Your favorite books:</Topic>
        <div className="mt-14 flex flex-col gap-4">
          <p className="text-white text-center">
            You haven't saved any books as favorites yet.
          </p>
        </div>
      </main>
    </section>
  );
}
