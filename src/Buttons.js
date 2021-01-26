import {Component} from 'react';
import App from 'react';
import data from './data';
import Profile from './Profile';

const Buttons = (props)=> {

//     const handleClickPrevious=()=>{
//             //console.log('The button is clicked.')
//         //props.data[1]
//            }
    

//     const handleClickNext=()=>{
    
// //         //console.log('The button is clicked.')
// //         const forward = props.data.map((elem, index)=>{
// //            return index = index+ 1;
// //        })
//  }
//THIS WAS INCORRECT. NEEDED TO BE DONE IN APP.js ^^^^^^^^^^^^^^^^^

return(

    <div>
    <button className="previous" onClick={()=>props.decrement()}>{`< Previous`} {props.userDirectory}</button>
    <button onClick={()=>props.deletePerson()}>Delete Person</button>
    <button className="next" onClick={()=>props.increment()}>{`Next >`}</button>
</div>

)
   


}


export default Buttons;


