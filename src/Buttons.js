import {Component} from 'react';
import App from 'react';
import data from './data';
import Profile from './Profile';

const Buttons = (props)=> {

    const handleClickPrevious=()=>{
            //console.log('The button is clicked.')
        //props.data[1]
           }
    

    const handleClickNext=()=>{
    
//         //console.log('The button is clicked.')
//         const forward = props.data.map((elem, index)=>{
//            return index = index+ 1;
//        })
 }


return(

    <div>
    <button className="previous" onClick={handleClickPrevious}>{`< Previous`} {props.userDirectory}</button>
    <button className="next" onClick={handleClickNext}>{`Next >`}</button>
</div>

)
   


}


export default Buttons;


