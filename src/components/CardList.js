import React from 'react';
import Card from './Card';



	const pok_imgs=[];
	var i=1;
	
	while(i<=150){
		pok_imgs.push("https://pokeres.bastionbot.org/images/pokemon/"+ i + ".png")
	i++;
	
	
	}

const CardList=({pokemons,onCardClick})=>{
	return(
	<div>
	{pokemons.map((pokemon,i)=>{
		return (
			<Card
				 key={i}
				 image={pok_imgs[pokemons[i].id-1]}
		 		id={pokemons[i].id}
				 name={pokemons[i].name}
				 types={pokemons[i].types} 
				 onCardClick={onCardClick}
		 		
				 />
				);
			})
 	}	
    </div>
	);
}


export default CardList