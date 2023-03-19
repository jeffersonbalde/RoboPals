
import { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import robots from './robots';

// const App = () => {

//   return (
//     <div className='tc'>
//       <h1>RoboPals</h1>
//       <SearchBox />
//       <CardList robots={robots}/>
//     </div>
//   )
// }
class App extends Component {
  render() {
    return (
      <div className='tc'>
        <h1>RoboPals</h1>
        <SearchBox />
        <CardList robots={robots}/>
      </div>
    )
  }
}


export default App