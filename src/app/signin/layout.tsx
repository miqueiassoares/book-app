import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sign In',
    description: 'Log in to your booktrove account'
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
