import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setinput] = useState('');

  const inputOnChange = ev => setinput(ev.target.value);

  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return (
        <div>
          <h1>the results was not found</h1>;
        </div>
      );
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <MainPageLayout>
        <input
          type="text"
          onChange={inputOnChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <button type="button" onClick={onSearch}>
          Search
        </button>
        {renderResults()}
      </MainPageLayout>
    </div>
  );
};

export default Home;
