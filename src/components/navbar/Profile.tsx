import { CgProfile } from 'react-icons/cg';
import LinkTemplate from './LinkTemplate';

export default function Profile() {
  return (
    <div className="flex flex-row items-center gap-16 ml-10">
      <LinkTemplate href={'/settings'}>Settings</LinkTemplate>
      <div className="flex flex-col w-max gap-1">
        <div>
          <CgProfile className="w-auto h-12 text-violet-400 bg-violet-950 rounded-full" />
        </div>
        <button
          type="button"
          className="bg-violet-500 text-white pr-2 pl-2 rounded-sm text-sm cursor-pointer hover:opacity-70 transition-opacity focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
}
