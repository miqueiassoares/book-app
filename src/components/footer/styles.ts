'use client';

import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: rgba(49, 49, 125, 0.5);
  backdrop-filter: blur(13.5px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 4rem auto 0.5rem;
  max-width: 700px;
  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;
