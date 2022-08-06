import { PokemonSelect } from "./PokemonSelect";

export function SelectScreen({list, pokemon1, pokemon2, setPokemon1, setPokemon2}){
    return (
        <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
            <PokemonSelect list={pokeList} pokemon={pokemon1} setPokemon={setPokemon1} />
            <img style={{position:"relative", height:"7rem", margin:"auto"}} src={vsLogo}/>
            <PokemonSelect list={pokeList} pokemon={pokemon2} setPokemon={setPokemon2}/>
            <button onClick={startGame} className="startButton">START</button>
        </div>
    )
}