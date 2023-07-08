'use client';

import { styled } from 'styled-components';

const Header = styled.header`
  background-color: rgba(49, 49, 125, 0.5);
  backdrop-filter: blur(13.5px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 1rem;
  border-radius: 0.5rem;
  width: max-content;
  display: flex;
  align-items: baseline;
  gap: 5rem;
`;

const Form = styled.form`
  background-color: rgb(19, 19, 56);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
`;

export { Form, Header };
