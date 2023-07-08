import Logo from './Logo';
import Nav from './Nav';
import Profile from './Profile';
import Search from './Search';
import { Header } from './styles';

export default function NavBar() {
  return (
    <div>
      <Nav />
      <Header>
        <Logo />
        <Search />
      </Header>
      <Profile />
    </div>
  );
}
