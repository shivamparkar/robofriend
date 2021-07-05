import React, { Component } from 'React';
import CardList from './Cardlist';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css'


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      robots: [],
      searchfield: ''
    }
  }

  componentDidmount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(user => this.setstate({robots:users}));
  }

    this.setState({ robots: robots});
  }
  onSearchChange = (event) => {
    this.setstate({ searchfield: event.target.value})
  }
  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.tolowerCase().includes(this.state.searchfield.tolowerCase());
    })
    if (this.state.robots.length === 0){
    return (
      <div className ="tc">
      <h1>Robofriend</h1>
      <h1 className='f2'>Robofriend</h1>
      <SearchBox searchchange={this.onSearchChange}/>
      <CardList robots= {filteredRobots} />
      </div>
    );
  }
}
}
export default App;
