import { PokemonSelect } from "./PokemonSelect";
import vsLogo from "../../assets/vsLogo.png"

export function SelectScreen({list, pokemon1, pokemon2, setPokemon1, setPokemon2, setArena}){
    return (
        <div style={{
            width:"100%", 
            height:"100%", 
            display:"flex", 
            position:"absolute"
            }}
        >
            <PokemonSelect list={list} pokemon={pokemon1} setPokemon={setPokemon1} />
            <img style={{position:"relative", height:"7rem", margin:"auto"}} src={vsLogo}/>
            <PokemonSelect list={list} pokemon={pokemon2} setPokemon={setPokemon2}/>
            <button onClick={() => setArena(true)} className="startButton">START</button>
        </div>
    )
}