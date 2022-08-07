import { useState } from "react"

export function PokemonFighter({pokemon, face}){

    return (
    <div className="pokemonContainer">
        <div className="hpBarContainer">
            <div className="hpBar" style={{width:"100%", backgroundColor:"rgba(66, 255, 66, 0.699)"}}>
            </div>
        </div>
        <img style={{height:"12rem"}} src={face ? pokemon.sprites.front_default : pokemon.sprites.back_default}/>
        <div style={{width:"70%", display:"grid", gridTemplateColumns:"2", gap:"0.5rem", justifyContent:"center", marginBottom:"1rem"}}>
            <button className="moveContainer__move" style={{gridColumn:"1/2"}}>attack1</button>
            <button className="moveContainer__move" style={{gridColumn:"2/2"}}>attack2</button>
            <button className="moveContainer__move" style={{gridColumn:"1/2"}}>attack3</button>
            <button className="moveContainer__move" style={{gridColumn:"2/2"}}>attack4</button>
        </div>
    </div>
    )
}