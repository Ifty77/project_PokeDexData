import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import _InputTable from './_InputTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/input-table" component={_InputTable} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
