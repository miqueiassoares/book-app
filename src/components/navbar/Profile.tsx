import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

export default function Profile() {
  return (
    <div>
      <Link href={'/settings'}>Settings</Link>
      <div>
        <CgProfile />
      </div>
    </div>
  );
}
