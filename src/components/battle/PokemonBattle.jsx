import { useEffect, useState } from "react"
import "./PokemonBattle.css"
import { PokemonFighter } from "./PokemonFighter"

export function PokemonBattle({pokemon1, pokemon2}){
    let life1 = pokemon1.stats[0].base_stat;
    let life2 = pokemon2.stats[0].base_stat
    const [fighter1, setFighter1] = useState(pokemon1);
    const [fighter2, setFighter2] = useState(pokemon2);
    const [showDamage, setShowDamage] = useState(false)
    const [turn, setTurn] = useState(1)
/*     
    useEffect(() => {
        setShowDamage(true);
        const timer = setTimeout(() => {
            setShowDamage(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [turn])
     */
    return (
        <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
            <PokemonFighter turn={turn===1 ? true : false} setTurn={setTurn} pokemon={fighter1} face={false} life={life1} />
                <p style={{position:"relative", fontSize:"24px", top:"10rem", color:"red", hidden:showDamage}}>a</p>
            <PokemonFighter turn={turn===2 ? true : false} setTurn={setTurn} pokemon={fighter2} face={true} life={life2} />
        </div>
    )
}