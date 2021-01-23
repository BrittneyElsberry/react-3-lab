import {Component} from 'react';
import Buttons from 'react';
import data from './data';



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
         <div>
         <h2 id="descrip">Name</h2>
            <p id="descrip"> 
                From: <br></br>
                Job Title: <br></br>
                Employer: 
        
            </p>
        <br></br>
        <p>Favorite Movies:</p>
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