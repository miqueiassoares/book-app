import { IoIosSettings } from 'react-icons/io';
import LinkTemplate from './LinkTemplate';
import ButtonComponent from './ButtonComponent';

export default function Profile() {
  return (
    <div className="flex flex-row items-center gap-10 mb:scale-90 mbx:hidden">
      <LinkTemplate href={'/settings'} target="_blank">
        <IoIosSettings className="h-6 w-auto" />
        Settings
      </LinkTemplate>
      <div className="flex flex-col gap-1 items-center">
        <ButtonComponent typeB="signin" />
        <ButtonComponent typeB="signup" />
      </div>
    </div>
  );
}
