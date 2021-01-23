import {Component} from 'react';
//import Buttons from './Buttons';


class Profile extends Component{
constructor(){
super()
this.state = {
 name: ''   

}

}

render(){

    return(
        <div className="displayData">  
        <div>
         <h2 id="name">{this.props.data}Name</h2><h2 id="numIndex">Number Index</h2>
            <p id="descrip"> 
                From: <br></br>
                Job Title: <br></br>
                Employer: 
        
            </p>
        <br></br>
        <p>Favorite Movies:</p>
        <ol>
            <li>{}</li>
            <li>{}</li>
            <li>{}</li>
        </ol>
         </div>


         <br></br>
       
        
      
        </div>


    )
}


}

export default Profile;