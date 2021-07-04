import React, { Component } from 'React';
import CardList from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setstate({ searchfield: event.target.value})
  }
  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.tolowerCase().includes(this.state.searchfield.tolowerCase());
    })
    return (
      <div className ="tc">
      <h1>Robofriend</h1>
      <SearchBox searchchange={this.onSearchChange}/>
      <CardList robots= {filteredRobots} />
      </div>
    );
  }
}

export default App;
