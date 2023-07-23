'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { Form } from './styles';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  function search(query: string) {
    if (query.length > 0) {
      router.push(`/search?q=${query}`);
    }
  }

  return (
    <Form
      autoComplete="off"
      onSubmit={(e: any) => {
        e.preventDefault();
        search(query);
      }}
    >
      <button type="submit" className="h-4 w-auto pl-4 pr-2 cursor-pointer">
        <HiSearch className="text-violet-400" />
      </button>
      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        className="bg-transparent p-1 outline-none text-violet-200 w-72 mbx:w-max"
      />
    </Form>
  );
}
