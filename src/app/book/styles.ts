'use client';

import styled from 'styled-components';

export const BookInfoContainer = styled.section`
  background-color: rgba(49, 49, 125, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  max-width: 56rem;
  padding: 0.5rem;
  margin: 2rem auto 0;
  border-radius: 0.5rem;
`;
export const SideLine = styled.hr`
  height: 22px;
  width: 2px;
  background-color: rgb(123, 111, 899);
`;
export const ModalContainer = styled.div`
  z-index: 100;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(80, 80, 80, 0.5);
`;

export const ModalContent = styled.section`
  width: 700px;
  height: 500px;
  margin: 40px auto 0;
  background-color: rgb(123, 111, 899);
  border-radius: 0.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
`;
export const ModalHeader = styled.div`
  padding-bottom: 1.5rem;
  box-shadow: 0 1px 5px black;
  position: sticky;
  top: 0;
`;

export const ModalInfo = styled.div`
  height: 100%;
  font-size: 0.8rem;
  overflow: auto;
`;
export const ModalMoreInfo = styled.div`
  font-size: 1rem;
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
export const InfoTemplate = styled.div`
  & h2 {
    font-weight: bold;
    font-size: 0.8rem;
  }
  & p {
    font-size: 0.7rem;
  }
`;
