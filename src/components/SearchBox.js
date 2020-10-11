import React from 'react';


const SearchBox= ({searchfield, searchChange})=>{
	return(
		<div className=' pa2'>

		<input
		className='pa3 ba--green bg-lightest-blue'
		 type='search' 
		 placeholder='search pokemons'
		 onChange={searchChange}
		 />
		</div>
	);
}

export default SearchBox;