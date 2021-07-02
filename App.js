import React, { Component } from 'react';
import CardList from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';

const state = {
  robots: robots,
  searchfield: ''
}
class App extends Component {
  render() {
    return (
      <div className ="tc">
      <h1>Robofriend</h1>
      <SearchBox />
      <CardList robots= {robots} />
      </div>
    );
  }
}

export default App;
