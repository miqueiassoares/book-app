import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FaSheetPlastic } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';
import LinkTemplate from '../navbar/LinkTemplate';
import { FooterStyle } from './styles';

export default function Footer() {
  return (
    <FooterStyle>
      <div className="text-violet-500 flex gap-6 m-auto w-max mbx:grid grid-cols-2 mbx:gap-4">
        <LinkTemplate
          href="https://developers.google.com/books/docs/overview"
          target="_blank"
        >
          <BsGoogle />
          Books Api
        </LinkTemplate>

        <LinkTemplate
          href="https://github.com/miqueiassoares/book-app"
          target="_blank"
        >
          <BsGithub className="h-4 w-auto" />
          Git Hub
        </LinkTemplate>

        <LinkTemplate href="/about">
          <FaSheetPlastic />
          About
        </LinkTemplate>

        <LinkTemplate href="/settings" target="_blank">
          <IoIosSettings className="h-5 w-auto" />
          Settings
        </LinkTemplate>
      </div>
      <p className="w-max text-violet-50 m-auto text-xs mt-2">
        © 2023 BookTrove
      </p>
    </FooterStyle>
  );
}
