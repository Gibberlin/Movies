import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Started from './components/Started';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/started">
        <Started />
      </Route>
      <Route>
        This Page is not found
        <h1>Error: 404</h1>
      </Route>
    </Switch>
  );
}

export default App;
