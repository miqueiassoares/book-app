import { IoIosSettings } from 'react-icons/io';
import LinkTemplate from './LinkTemplate';
import LoginButton from './LoginButton';

export default function Profile() {
  return (
    <div className="flex flex-row items-center gap-16 ml-10 mb:scale-90 mbx:hidden">
      <LinkTemplate href={'/settings'} target="_blank">
        <IoIosSettings className="h-6 w-auto" />
        Settings
      </LinkTemplate>
      <LoginButton avatar />
    </div>
  );
}
