import "./BattleArena.css"
import logo from "../assets/pokemonLogo.png"
import vsLogo from "../assets/vsLogo.png"
import { PokemonSelect } from "./PokemonSelect"
import { useEffect, useState } from "react"

export function BattleArena(){
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => setPokeList(data.results))
    }, [])
    
    return (
        <div className="battleArena">
            <img src={logo} alt=""/>
            <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
                <PokemonSelect list={pokeList} />
                <img style={{position:"relative", height:"7rem", top:"14rem", left:"1rem"}} src={vsLogo}/>
                <PokemonSelect list={pokeList}/>
            </div>
        </div>
    )
}