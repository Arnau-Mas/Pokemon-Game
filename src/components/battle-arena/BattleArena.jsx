import "./BattleArena.css"
import logo from "../../assets/pokemonLogo.png"
import { PokemonSelect } from "../select/PokemonSelect"
import { useEffect, useState } from "react"
import { SelectScreen } from "../select/SelectScreen"
import { PokemonBattle } from "../battle/PokemonBattle"

export function BattleArena(){
    const [pokeList, setPokeList] = useState([])
    const [pokemon1, setPokemon1] = useState({});
    const [pokemon2, setPokemon2] = useState({});
    const [arena, setArena] = useState(false)

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
            {arena && pokemon1 && pokemon2 && pokeList.some(pokemon => pokemon.name === pokemon1.name) && pokeList.some(pokemon => pokemon.name === pokemon2.name) ?
                <PokemonBattle list={pokeList} pokemon1={pokemon1} pokemon2={pokemon2} setPokemon1={setPokemon1} setPokemon2={setPokemon2} setArena={setArena}/>
            :
                <SelectScreen list={pokeList} pokemon1={pokemon1} pokemon2={pokemon2} setPokemon1={setPokemon1} setPokemon2={setPokemon2} setArena={setArena} />
             }
            
        </div>
    )
}

/*     return (
        <div className="battleArena">
            <img src={logo} alt=""/>
            <SelectScreen pokeList={pokeList} pokemon1={pokemon1} pokemon2={pokemon2} setPokemon1={setPokemon1} setPokemon2={setPokemon2} />
        </div>
    ) */