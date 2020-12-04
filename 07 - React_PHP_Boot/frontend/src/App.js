import React from 'react';
import Nav1 from './Components/Nav1';
import Footer from './Components/Footer';
import PageHome from './Pages/PageHome';
import PageProducts from './Pages/PageProducts';
import PageStores from './Pages/PageStores';
import PageContact from './Pages/PageContact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Nav1 />
      <Switch>
        <Route path="/" exact component={PageHome} />
        <Route path="/products" exact component={PageProducts} />
        <Route path="/stores" exact component={PageStores} />
        <Route path="/contact" exact component={PageContact} />
      </Switch>
      <Footer />
    </Router>
  );
}
