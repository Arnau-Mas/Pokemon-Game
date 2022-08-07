import { useEffect, useState } from "react"
import "./PokemonBattle.css"
import { PokemonFighter } from "./PokemonFighter"

export function PokemonBattle({pokemon1, pokemon2, setArena}){
    const lifePokemon1 = pokemon1.stats[0].base_stat;
    const lifePokemon2 = pokemon2.stats[0].base_stat;
    const [life1, setLife1] = useState(pokemon1.stats[0].base_stat)
    const [life2, setLife2] = useState(pokemon2.stats[0].base_stat)
    const [hideDamage, setHideDamage] = useState(true);
    const [damage, setDamage] = useState("");
    const [turn, setTurn] = useState(1)
    
    useEffect(() => {
        setHideDamage(false);
        const timer = setTimeout(() => {
            setHideDamage(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [turn])

    return (
            <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
            <PokemonFighter turn={turn===1 && life1>0 && life2>0 ? true : false} setTurn={setTurn} barPercent={life1*100/lifePokemon1 < 0 ? 0 : life1*100/lifePokemon1} pokemon={pokemon1} setLife={setLife2} face={false} life={life1} setDamage={setDamage} />
            {
                life1>0 && life2>0 ? 
                    <div style={{position:"relative", fontSize:"40px", top:"10rem"}}>
                    <p style={{fontFamily: "'VT323', monospace"}}>Damage:</p>
                    {damage && <p style={{color:"red", textAlign:"center", marginTop:"1rem", fontSize:"3rem", fontFamily: "'VT323', monospace"}} hidden={hideDamage}>-{damage}</p>}
                    </div>
                :
                <div style={{position:"relative", fontSize:"24px", top:"10rem", height:"10rem", width:"9rem"}}>
                    <p style={{fontFamily: "'VT323', monospace", textAlign:"center", fontSize:"1.8rem"}}>The Winner</p>
                   <p style={{backgroundColor:"green", textAlign:"center", color:"white", marginTop:"1rem"}}>{life1<=0 ? "🢂" : "🢀"}</p>
                   <button className="startButton" onClick={() => setArena(false)}>BACK</button>
                </div>

            }
            <PokemonFighter turn={turn===2 && life1>0 && life2>0 ? true : false} setTurn={setTurn} barPercent={life2*100/lifePokemon2 < 0 ? 0 : life2*100/lifePokemon2} pokemon={pokemon2} setLife={setLife1} face={true} life={life2} setDamage={setDamage} />
            </div>
    )
}