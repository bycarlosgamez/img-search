import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;

    const result = setTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' value={term} />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;
