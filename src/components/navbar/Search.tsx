'use client';

import { HiSearch } from 'react-icons/hi';
import { Form } from './styles';

export default function Search() {
  return (
    <Form
      autoComplete="off"
      onSubmit={(e: any) => {
        e.preventDefault();
      }}
    >
      <button type="submit" className="h-4 w-auto pl-4 pr-2 cursor-pointer">
        <HiSearch />
      </button>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="bg-transparent p-1 outline-none text-violet-200 w-72 "
      />
    </Form>
  );
}
