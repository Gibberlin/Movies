import React from 'react';
import Nav from './Nav';
import { Pages } from './Pages';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Pages title="Boomarang" subtitle="call me honey"></Pages>

      {children}
    </div>
  );
};

export default MainPageLayout;
