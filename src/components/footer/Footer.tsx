import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FaSheetPlastic } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';
import LinkTemplate from '../navbar/LinkTemplate';
import { FooterStyle } from './styles';

export default function Footer() {
  return (
    <FooterStyle>
      <div className="text-violet-500 flex gap-2 m-auto w-max">
        <LinkTemplate
          href="https://developers.google.com/books/docs/overview"
          target="_blank"
        >
          <BsGoogle />
          Google Books Api
        </LinkTemplate>
        -
        <LinkTemplate href="https://github.com/miqueiassoares" target="_blank">
          <BsGithub className="h-4 w-auto" />
          Git Hub
        </LinkTemplate>
        -
        <LinkTemplate href="/about">
          <FaSheetPlastic />
          About
        </LinkTemplate>
        -
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
