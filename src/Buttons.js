import {Component} from 'react';
import App from 'react';

const Buttons = (props)=> {

    const handleClick=()=>{
            console.log('The button is clicked.')
    }


return(

    <div>
    <button className="previous" onClick={handleClick}>{`< Previous`} {props.userDirectory}</button>
    <button className="next" onClick={handleClick}>{`Next >`}</button>
</div>

)
   


}

export default Buttons;


