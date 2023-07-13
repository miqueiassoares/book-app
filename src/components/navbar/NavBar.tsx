import Logo from './Logo';
import Nav from './Nav';
import Profile from './Profile';
import Search from './Search';
import { Header } from './styles';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-around pt-2 pb-2 max-w-7xl m-auto sticky top-0 z-10">
      <Nav />
      <Header>
        <Logo />
        <Search />
      </Header>
      <Profile />
    </div>
  );
}
