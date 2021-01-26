
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


increment = ()=> {

if (this.state.index < this.state.data.length - 1){
this.setState({index: this.state.index + 1})

} else {
  this.setState({
    index: 0
  })
}

}

decrement = ()=> {
  if (this.state.index > 0){
    this.setState({index: this.state.index - 1})
    
    } else {
      this.setState({
        index: this.state.data.length -1
      })
    }
  
}

deletePerson = () => {
  const {data, index} = this.state //destructering
  data.splice(index, 1) //this will remove 1 index of the array when the delete button is clicked
  this.setState({
    data
  })
}
// ^^ why did we create this in app.js. the answer is, the functions need to be wherever the state is acting on
// any action we take that will update the piece of state. function needs to go there.
// 

render(){
  return (
  <div className="App">
   <Header />
    <Profile data={this.state.data[this.state.index]} />
    <Buttons increment={this.increment} decrement={this.decrement} deletePerson={this.deletePerson}/>
    </div>
)

}
}

export default App;
