import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Settings',
    description: 'Your settings.'
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
