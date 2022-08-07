import { useState, useEffect } from "react"

export function PokemonFighter({pokemon, face, life, turn, setTurn, setDamage, setLife, barPercent}){
    console.log(pokemon.name, barPercent)
    const [color, setColor] = useState("rgba(66, 255, 66, 0.699)");
    const moves = pokemon.moves;

    function attack(number){
        setLife(prev => prev-number);
        setDamage(number);
        setTurn(prev => prev===1 ? 2 : 1)
    }

    useEffect(() => {
        if(life<=pokemon.stats[0].base_stat/2 && life>pokemon.stats[0].base_stat/4){
            setColor("orange")
        }else if(life<=pokemon.stats[0].base_stat/4){
            setColor("red")
        }else{
            setColor("rgba(66, 255, 66, 0.699)")
        }
    }, [life])

    return (
    <div className="pokemonContainer">
        <div className="hpBarContainer">
            <div className="hpBar" style={{width:`${barPercent}%`, backgroundColor:color}}>
            </div>
        </div>
        <img style={{height: turn ? "12rem" : "10rem", filter: !turn && 'grayscale(100%)'}} src={face ? pokemon.sprites.front_default : pokemon.sprites.back_default}/>
        <div style={{width:"70%", display:"grid", gridTemplateColumns:"2", gap:"0.5rem", justifyContent:"center", marginBottom:"1rem", filter: !turn && 'grayscale(100%)'}}>
            <button disabled={!turn} className="moveContainer__move" onClick={() => attack(10)} style={{gridColumn:"1/2"}}>{moves[0].move.name}</button>
            <button disabled={!turn} className="moveContainer__move" onClick={() => attack(15)} style={{gridColumn:"2/2"}}>{moves[1].move.name}</button>
            <button disabled={!turn} className="moveContainer__move" onClick={() => attack(20)} style={{gridColumn:"1/2"}}>{moves[2].move.name}</button>
            <button disabled={!turn} className="moveContainer__move" onClick={() => attack(5)} style={{gridColumn:"2/2"}}>{moves[3].move.name}</button>
        </div>
    </div>
    )
}