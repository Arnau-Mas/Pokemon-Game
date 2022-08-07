import { useState, useEffect } from "react"

export function PokemonFighter({pokemon, face, life, turn, setTurn}){
    console.log(turn)
    const [color, setColor] = useState("rgba(66, 255, 66, 0.699)");
    const moves = pokemon.moves;
    console.log(moves)
    useEffect(() => {
        if(life<=pokemon.stats[0].base_stat/2 && life>pokemon.stats[0].base_stat/3){
            setColor("orange")
        }else if(life<=pokemon.stats[0].base_stat/3){
            setColor("red")
        }else{
            setColor("rgba(66, 255, 66, 0.699)")
        }
    }, [pokemon])

    return (
    <div className="pokemonContainer">
        <div className="hpBarContainer">
            <div className="hpBar" style={{width:"100%", backgroundColor:color}}>
            </div>
        </div>
        <img style={{height:"12rem"}} src={face ? pokemon.sprites.front_default : pokemon.sprites.back_default}/>
        <div style={{width:"70%", display:"grid", gridTemplateColumns:"2", gap:"0.5rem", justifyContent:"center", marginBottom:"1rem"}}>
            <button disabled={turn} className="moveContainer__move" onClick={(e) => console.log(e.target.value)} style={{gridColumn:"1/2"}}>{moves[0].move.name}</button>
            <button disabled={turn} className="moveContainer__move" onClick={(e) => console.log(e.target.value)} style={{gridColumn:"2/2"}}>{moves[1].move.name}</button>
            <button disabled={turn} className="moveContainer__move" onClick={(e) => console.log(e.target.value)} style={{gridColumn:"1/2"}}>{moves[2].move.name}</button>
            <button disabled={turn} className="moveContainer__move" onClick={(e) => console.log(e.target.value)} style={{gridColumn:"2/2"}}>{moves[3].move.name}</button>
        </div>
    </div>
    )
}