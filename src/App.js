import React from 'react';
import { Switch, route, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/started">
        {' '}
        This app has started
      </Route>
      <Route>
        This Page is not found
        <h1>Error: 404</h1>
      </Route>
    </Switch>
  );
}

export default App;
