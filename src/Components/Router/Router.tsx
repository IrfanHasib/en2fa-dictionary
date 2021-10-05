import './style.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Privacy from '../Privacy/Privacy';
import Terms from '../Terms/Terms';

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename="/en2fa-dictionary">
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
