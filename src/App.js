
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

import data from './data'
import Profile from './Profile'
import Buttons from './Buttons';

class App extends Component {
constructor (){
super()
this.state = {
userDirectoryData: data,
index: 0
}

}

render(){
console.log(data)

return (
  <div className="App">
   <Header />
    <Profile data={this.state.data} index={this.state.index} />
    <Buttons/>
    </div>


)

}
}

export default App;
