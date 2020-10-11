const arr =[];
var i=1;


while(i<=150){
var pokemon =fetch("https://pokeapi.co/api/v2/pokemon/"+ i + "/")
    .then(response=> response.json())
    arr.push(pokemon)
    i++;
	
}






        
  