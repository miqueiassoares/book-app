'use client';
import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Recomendations() {
  if (!localStorage.getItem('recomendations')) {
    localStorage.setItem('recomendations', JSON.stringify(['harrypotter', 'gameofthrones', 'bigbang', 'books']));
    localStorage.setItem('maxResults', String(15));
  }

  const [variables, setVariables] = useState<string[]>(JSON.parse(String(localStorage.getItem('recomendations'))));
  const [variable, setVariable] = useState<string>('');
  const [maxResults, setMaxResults] = useState<number>(localStorage.getItem('maxResults') ?  JSON.parse(String(localStorage.getItem('maxResults'))) : 15 );

  const handleDeleteVariable = (indexToDelete: number) => {
    const newVariables = [...variables];
    newVariables.splice(indexToDelete, 1);
    setVariables(newVariables);
    localStorage.removeItem('recomendations');
    localStorage.setItem('recomendations', JSON.stringify(newVariables));
  };

  const createVariable = () => {
    if (variables.length >= 4) return;
    if (variable.length === 0) return;
    const newVariables = [...variables, variable];
    setVariables(newVariables);
    localStorage.removeItem('recomendations')
    localStorage.setItem('recomendations', JSON.stringify(newVariables))
    setVariable('');
  };

  return (
    <section>
      <h2>
        Here you can edit your recommendation variables and the number of books
        to return.
      </h2>
      <form
        className="flex flex-col gap-2 mt-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="maxresults">
          Number of books returned (40 is the maximum number )
        </label>
        <div className="flex flex-row gap-2">
          <input
            type="number"
            name="maxresults"
            id="maxresults"
            className="text-black p-1 text-sm font-bold rounded"
            max={40}
            min={1}
            value={maxResults}
            onChange={(event) => setMaxResults(() => {
              if (Number(event.target.value) <= 0 || Number(event.target.value) > 40) return 15;
              localStorage.removeItem('maxResults');
              localStorage.setItem('maxResults', String(event.target.value));
              return Number(event.target.value);
            })}
          />
        </div>
      </form>

      <form
        className="mt-4 flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          createVariable();
        }}
      >
        <label htmlFor="variable">Create recommendation variable.</label>
        <div className="flex flex-row gap-1">
          <input
            type="text"
            id="variable"
            value={variable}
            className="text-black rounded p-1"
            maxLength={70}
            placeholder="Example: harrypotter"
            onChange={(event) => setVariable(event.target.value)}
          />
          <button type="submit" className='cursor-pointer p-1 bg-purple-500 rounded text-white'>Save</button>
        </div>
      </form>

      <h3 className="mt-2">
        Recommendation variables (Only supports 4 variables):
      </h3>
      <div className="mt-2 flex flex-col gap-1">
        {variables.length > 0 ? (
          variables.map((variable, index) => {
            return (
              <div
                key={`${variable}key${index}`}
                className="bg-purple-500 text-white p-2 flex gap-2 justify-between rounded"
              >
                <span>{variable}</span>
                <button
                  type="button"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => handleDeleteVariable(index)}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            );
          })
        ) : (
          <span className="text-red-600">
            You don't have recommendation variables.
          </span>
        )}
      </div>
    </section>
  );
}
