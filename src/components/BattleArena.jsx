import "./BattleArena.css"
import logo from "../assets/pokemonLogo.png"
import vsLogo from "../assets/vsLogo.png"
import { PokemonSelect } from "./PokemonSelect"
import { useEffect, useState } from "react"

export function BattleArena(){
    const [pokeList, setPokeList] = useState([])
    const [pokemon1, setPokemon1] = useState({});
    const [pokemon2, setPokemon2] = useState({});

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => {
            setPokeList(data.results)
        })
    }, [])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then(res => res.json())
        .then(data => {
            setPokemon1(data)
            setPokemon2(data)
        })
    }, [])

    return (
        <div className="battleArena">
            <img src={logo} alt=""/>
            <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
                <PokemonSelect list={pokeList} pokemon={pokemon1} setPokemon={setPokemon1} />
                <img style={{position:"relative", height:"7rem", margin:"auto"}} src={vsLogo}/>
                <PokemonSelect list={pokeList} pokemon={pokemon2} setPokemon={setPokemon2}/>
            </div>
        </div>
    )
}