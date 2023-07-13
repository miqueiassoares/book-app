import { BsGithub, BsGoogle } from 'react-icons/bs';
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
          <BsGoogle className="inline-block h-4 w-auto mr-1" />
          Google Books Api
        </LinkTemplate>
        -
        <LinkTemplate href="https://github.com/miqueiassoares" target="_blank">
          <BsGithub className="inline-block h-5 w-auto mr-1" />
          Git Hub
        </LinkTemplate>
        -<LinkTemplate href="/about">About</LinkTemplate>-
        <LinkTemplate href="/settings" target="_blank">
          Settings
        </LinkTemplate>
      </div>
      <p className="w-max text-violet-50 m-auto text-xs mt-2">©BookTrove</p>
    </FooterStyle>
  );
}
