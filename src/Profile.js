
const Profile =(props)=>{


    return(
        <div className="displayData">  
        <div>
      
         <h2 id="name" >{props.data.name.first} {props.data.name.last}</h2>
         <h2 id="numIndex">{props.data.id}/25</h2>
            <p id="descrip"> 
                From: {props.data.city}, {props.data.country}<br></br>
                Job Title: {props.data.title} <br></br>
                Employer: {props.data.employer}
        
            </p>
        <br></br>
        <p>Favorite Movies:</p>
        <ol>
            <li>{props.data.favoriteMovies[0]}</li>
            <li>{props.data.favoriteMovies[1]}</li>
            <li>{props.data.favoriteMovies[2]}</li>
        </ol>
         </div>


         <br></br>
       
        
      
        </div>


    )



}

export default Profile;