
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
data: data,
index: 0
}

}


render(){



  return (
  <div className="App">
   <Header />
    <Profile data={this.state.data[this.state.index]} />
    <Buttons data={this.state.data[this.state.index]}/>
    </div>
)

}
}

export default App;
