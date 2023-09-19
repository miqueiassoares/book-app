import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sign Up',
    description: 'Create an account on booktrove.'
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
