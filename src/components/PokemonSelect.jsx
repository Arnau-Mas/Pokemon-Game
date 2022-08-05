import { useEffect, useState } from "react";
import "./PokemonSelect.css";

export function PokemonSelect({list, pokemon, setPokemon}){
     const [chosenPokemon, setChosenPokemon] = useState("");
     const [photo, setPhoto] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"); 
    function setChoice(e){
        let objectPokemon = list.find(pokemon => pokemon.name === e.target.value);
        setChosenPokemon(objectPokemon);
    }

    useEffect(() => {
        fetch(chosenPokemon.url)
        .then(res => res.json())
        .then(data => {
            setPokemon(data)
            setPhoto(data.sprites.other.home.front_default)})
    }, [chosenPokemon])
    
    return (
        <div className="pokemonSelect">
            {Object.entries(pokemon) && <img style={{height:"10rem"}} src={photo} />}
            <p className="pokemonSelect__p">Choose a Pokemon</p>
            <select value={chosenPokemon.name} onChange={setChoice}>
                {list.map(pokemon => <option value={pokemon.name} key={pokemon.name}>{pokemon.name}</option>)}
            </select>
        </div>
    )
}