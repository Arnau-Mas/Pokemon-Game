import "./PokemonSelect.css";

export function PokemonSelect({list}){
    console.log(list)
    return (
        <div className="pokemonSelect">
            <p className="pokemonSelect__p">Choose a Pokemon</p>
            <select>
                {list.map(pokemon => <option key={pokemon.name}>{pokemon.name}</option>)}
            </select>
        </div>
    )
}