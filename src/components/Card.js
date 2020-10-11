import React from 'react';
import './Card.css';


 const Card=(props)=>{
	 const {name,id,types,image,onCardClick}=props;
	 const str_types=types.map(types=>types.type.name.capitalize());
 	return (

 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' id='card' onClick={()=>onCardClick(id)}>
 			
 				<div>
 					<h2>{name.capitalize()}</h2>
					 <img src={image} alt="picture" width="200" height="200"/>
					 <p>{id}</p>
					 <p>Types: {str_types.join(", ")}</p>
 					
 				</div>
 		</div>
 		);
 }


 String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

 export default Card;