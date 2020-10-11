import React,{ Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo/Logo';
import InfoCard from '../components/InfoCard';




class App extends Component {
	constructor(){
		super();
	this.state={
		pokemons:[],
		searchfield: '',
		page:'home',
		pokemon_to_show:0,
		pok_imgs:[]


	}
}

componentDidMount() {
const pok_urls=[];
const pok_object=[];
const pok_imgs=[];
var i=1;

while(i<=150){
	pok_urls.push("https://pokeapi.co/api/v2/pokemon/"+ i + "/")
	pok_imgs.push("https://pokeres.bastionbot.org/images/pokemon/"+ i + ".png")
i++;

}
this.setState({pok_imgs:pok_imgs})

Promise.all(pok_urls.map(url =>
    fetch(url).then(p => p.json())
))
  .then(array => { array.map(po=>pok_object.push(po));
    
  })


this.state.pokemons=pok_object;

}






onSearchChange=(event)=>{
	this.setState({ searchfield:event.target.value})
	
}


onCardClick=(id)=>{
	if (this.state.page==='home'){
		this.setState({page:'card'})
		this.setState({pokemon_to_show:id})
	}
	else{
		this.setState({page:'home'})
		this.setState({pokemon_to_show:0})
	}
}

	render(){
		const filteredRobots =this.state.pokemons.filter(pokemons=>{
		return pokemons.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		
	}) 
	if(this.state.page==='home'){
		return(
		
		<div className='tc'>
			
			 <Logo/>
			{/* <h1 className='f1'>Pokemons</h1> */}
			<SearchBox searchChange={this.onSearchChange}/>
			
			<Scroll>
				<ErrorBoundry>
				<CardList pokemons={filteredRobots} onCardClick={this.onCardClick}/>
				</ErrorBoundry>
			</Scroll>
		</div>
			
		);
	}
	else{
		return(  
			<div className='tc'>
				<Logo/>
				<InfoCard
				 pokemons={this.state.pokemons[this.state.pokemon_to_show-1]}
				 onCardClick={this.onCardClick}
				 image={this.state.pok_imgs[this.state.pokemon_to_show-1]}/>
				
			
			</div>

		);
	}
	}

}
		

export default App;