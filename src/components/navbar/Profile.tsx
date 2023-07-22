import { CgProfile } from 'react-icons/cg';
import { IoIosSettings } from 'react-icons/io';
import LinkTemplate from './LinkTemplate';

export default function Profile() {
  return (
    <div className="flex flex-row items-center gap-16 ml-10">
      <LinkTemplate href={'/settings'} target="_blank">
        <IoIosSettings className="h-6 w-auto" />
        Settings
      </LinkTemplate>
      <div className="flex flex-col w-max gap-1 items-center hover:opacity-70 transition-opacity cursor-pointer ">
        <div>
          <CgProfile className="w-auto h-12 text-violet-50 bg-blue-400 rounded-full" />
        </div>
        <button
          type="button"
          className="bg-blue-400 text-violet-50 pr-2 pl-2 rounded-sm text-sm cursor-pointer focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
}
