import LinkTemplate from './LinkTemplate';

export default function Nav() {
  return (
    <nav className="flex flex-row gap-5 items-center">
      <LinkTemplate href="/favorites">Favorites</LinkTemplate>
      <LinkTemplate href={'/personallibrary'}>Bookshelves</LinkTemplate>
    </nav>
  );
}
