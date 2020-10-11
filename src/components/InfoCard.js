import React from 'react';
import './InfoCard.css';

const InfoCard = (props) => {
	const {pokemons, onCardClick, image} = props;
    
    const str_types = pokemons.types.map(types => types.type.name.capitalize());
    const str_abilitiy = pokemons.abilities.map(abilities => abilities.ability.name.capitalize());


	return (
		<div className = 'InfoCard tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-40' onClick={() => onCardClick()}>
			<div>
				<h2 className= 'f1'>{pokemons.name.capitalize()}</h2>
				<img src={image} alt='picture' height='200' width='200'/>
				<p>#Pokedex: {pokemons.id}</p>
				<p>Types: {str_types.join(", ")}</p>
				<p>Height: {pokemons.height}</p>
				<p>Weight: {pokemons.weight}</p>
				<p>Base experience: {pokemons.base_experience}</p>
				<p>Abilities: {str_abilitiy.join(", ")} </p>
				<p className="b underline">Stats: </p>
        <p>HP: {pokemons.stats[0].base_stat} </p>
        <p>ATTACK: {pokemons.stats[1].base_stat} </p>
        <p>DEFENCE: {pokemons.stats[2].base_stat} </p>
        <p>SPECIAL-ATTACK: {pokemons.stats[3].base_stat} </p>
        <p>SPECIAL-DEFENCE: {pokemons.stats[4].base_stat} </p>
        <p>SPEED: {pokemons.stats[5].base_stat} </p>

			</div>
		</div>
	);
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

export default InfoCard;






