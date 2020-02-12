import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component ={PageOne} exact={true} />
        <Route path="/pagetwo" component ={PageTwo} exact={true} />
      </div>
    );
  }
}


export default App;