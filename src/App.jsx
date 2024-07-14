import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import InputTable from './_InputTable';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/input-table" component={InputTable} />
          <Redirect from="/" to="/input-table" />
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;
