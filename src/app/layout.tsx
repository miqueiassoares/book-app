import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Discover the world of literature at your fingertips. BookVerse is your go-to online destination for exploring the latest and most popular books in the market. With our intuitive interface, you can easily navigate through an extensive collection of titles that are currently trending and delve into the stories that captivate readers worldwide'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} relative`}>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
