import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setinput] = useState('');

  const inputOnChange = ev => setinput(ev.target.value);

  const [results, setResults] = useState(null);

  const [searchOptions, setsearchOptions] = useState('shows');

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const OnRadioChange = ev => {
    setsearchOptions(ev.target.value);
  };
  console.log(searchOptions);
  const isShowSearch = searchOptions === 'shows';

  const renderResults = () => {
    if (results && results.length === 0) {
      return (
        <div>
          <h1>the results was not found</h1>;
        </div>
      );
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <div>
      <MainPageLayout>
        <input
          type="text"
          placeholder="Search for a show"
          onChange={inputOnChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <div>
          <label htmlFor="show-search">
            Shows
            <input
              id="show-search"
              type="radio"
              value="show"
              checked={isShowSearch}
              onClick={OnRadioChange}
            />
          </label>
          <label htmlFor="cast-search">
            Cast
            <input
              id="cast-search"
              type="radio"
              value="people"
              checked={!isShowSearch}
              onClick={OnRadioChange}
            />
          </label>
        </div>
        <button type="button" onClick={onSearch}>
          Search
        </button>
        {renderResults()}
      </MainPageLayout>
    </div>
  );
};

export default Home;
