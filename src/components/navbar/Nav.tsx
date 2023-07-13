import { AiFillStar } from 'react-icons/ai';
import { GiBookshelf } from 'react-icons/gi';
import LinkTemplate from './LinkTemplate';

export default function Nav() {
  return (
    <nav className="flex flex-row gap-5 items-center">
      <LinkTemplate href="/favorites">
        <AiFillStar className="h-5 w-auto" />
        Favorites
      </LinkTemplate>
      <LinkTemplate href={'/personallibrary'}>
        {' '}
        <GiBookshelf className="h-5 w-auto" />
        Bookshelves
      </LinkTemplate>
    </nav>
  );
}
