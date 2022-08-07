import "./PokemonBattle.css"

export function PokemonBattle({pokemon1, pokemon2, list}){
    console.log(pokemon1, pokemon2)
    return (
        <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
            <div className="pokemonContainer">
                <p>{pokemon1.name}</p>
                <img style={{height:"12rem"}} src={pokemon1.sprites.back_default}/>
                <div style={{width:"70%", display:"grid", gridTemplateColumns:"2", gap:"0.5rem", justifyContent:"center", marginBottom:"1rem"}}>
                    <button className="moveContainer__move" style={{gridColumn:"1/2"}}>attack1</button>
                    <button className="moveContainer__move" style={{gridColumn:"2/2"}}>attack2</button>
                    <button className="moveContainer__move" style={{gridColumn:"1/2"}}>attack3</button>
                    <button className="moveContainer__move" style={{gridColumn:"2/2"}}>attack4</button>
                </div>
            </div>
            <div className="pokemonContainer">
                <p>{pokemon1.name}</p>
                <img style={{height:"12rem"}} src={pokemon2.sprites.front_default}/>
            </div>
        </div>
    )
}