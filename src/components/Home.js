import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';

const Home = () => {
  const [input, setinput] = useState('');

  const inputOnChange = ev => setinput(ev.target.value);

  const onSearch = () => {
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(results => {
        console.log(results);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
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
      </MainPageLayout>
    </div>
  );
};

export default Home;
