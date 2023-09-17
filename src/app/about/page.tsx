import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About',
    description:
      'Welcome to the BookTrove, a platform I created with the aim of enhancing my skills in ReactJS and Next.js while sharing my passion for books with you. Here, we delve into the world of literature, providing a comprehensive experience for all book lovers.'
  };
}

export default function About() {
  return (
    <article className="max-w-3xl m-auto mt-8 text-purple-950 font-bold rounded-xl bg-blue-400 p-5 flex flex-col gap-3">
      <p>
        Welcome to the BookTrove, a platform I created with the aim of enhancing
        my skills in ReactJS and Next.js while sharing my passion for books with
        you. Here, we delve into the world of literature, providing a
        comprehensive experience for all book lovers.
      </p>
      <p>
        Our website is dedicated entirely to the realm of books. You can browse
        through a vast collection of works, search for titles, authors, genres,
        or any other criteria you desire. We harness the powerful Google Books
        API, a free tool provided by Google, to ensure you have access to an
        extensive and diverse virtual library.
      </p>
      <p>
        One of the main features of this site is the ability to create an
        account and log in. By signing up, you gain access to a personalized
        gallery of books. You can save the books you've already read, maintain a
        list of those you wish to read in the future, and even share your
        recommendations with other members of the literary community.
      </p>
      <p>
        Our team is constantly improving the site to provide you with the best
        possible experience. Additionally, we are committed to maintaining the
        privacy and security of your data, so you can browse and interact with
        peace of mind.
      </p>
      <p>
        Feel free to explore the vast world of books with us. We are excited to
        accompany you on your literary journey and help you discover new titles,
        authors, and thrilling stories. Welcome to our website, and enjoy each
        page turned on this literary adventure!
      </p>
    </article>
  );
}
