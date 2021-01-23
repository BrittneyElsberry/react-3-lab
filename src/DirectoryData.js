import {Component} from 'react';
import Buttons from 'react';
import data from './data';
//import Header from './Header';


class DirectoryData extends Component {
constructor(){
super()
this.state = {
userDirectory: [],


}

}

displayUser(){
   
    this.setState({userDirectory: data})
}

render (){
    
    return(
        <div className="directoryData">
         <h1>Home</h1>   

         <div>
         <h2 id="descrip">Name</h2>
        <h3 id="descrip">From: </h3>
        <h3 id="descrip">Job Title: </h3>
        <h3 id="descrip">Employer: </h3>
        <br></br>
        <h3>Favorite Movies:</h3>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>



         </div>
 
      
        </div>
     
    )


}


}

export default DirectoryData;