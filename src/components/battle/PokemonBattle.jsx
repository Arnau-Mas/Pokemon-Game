import { useState } from "react"
import "./PokemonBattle.css"
import { PokemonFighter } from "./PokemonFighter"

export function PokemonBattle({pokemon1, pokemon2}){
    let life1 = pokemon1.stats[0].base_stat;
    let life2 = pokemon2.stats[0].base_stat
    const [fighter1, setFighter1] = useState(pokemon1);
    const [fighter2, setFighter2] = useState(pokemon2);
    return (
        <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
            <PokemonFighter pokemon={fighter1} face={false} life={life1} />
            <PokemonFighter pokemon={fighter2} face={true} life={life2} />
        </div>
    )
}