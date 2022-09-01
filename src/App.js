import React from 'react'
import './App.scss';
import Footer from './components/static-components/Footer';
import Header from './components/static-components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';
import About from './components/About';
import Shop from './components/Shop';
import Commissions from './components/Commissions';
import NoPageFound from './components/static-components/NoPageFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
          <div className="content">
            <Switch>

              <Route exact path="/">
                <Gallery/>
              </Route>

              <Route path="/about">
                <About/>
              </Route>

              <Route path="/shop">
                <Shop/>
              </Route>

              <Route path="/contact">
                <Commissions/>
              </Route>

              <Route>
                <NoPageFound/>
              </Route>

            </Switch>
          </div>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
