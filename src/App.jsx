import { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import robots from './robots';
import './index.css'

class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: robots,
        searchfield: ''
      }
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
    
    render() {
      const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      return (
        <div className='tc'>
          <h1 className='f1'>RoboPals</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
}

export default App;