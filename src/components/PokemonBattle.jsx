import "./PokemonBattle.css"

export function PokemonBattle({pokemon1, pokemon2, list}){
    console.log(pokemon1, pokemon2)
    return (
        <div style={{width:"100%", height:"100%", display:"flex", position:"absolute"}}>
            <div className="pokemonContainer">
                <img style={{height:"15rem"}} src={pokemon1.sprites.back_default}/>
                <p>{pokemon1.name}</p>
                <div style={{backgroundColor:"green", width:"70%", display:"grid", gridTemplateColumns:"2", gap:"1rem", justifyContent:"center"}}>
                    <div style={{gridColumn:"1/2", backgroundColor:"yellow"}}>attack1</div>
                    <div style={{gridColumn:"2/2", backgroundColor:"yellow"}}>attack2</div>
                    <div style={{gridColumn:"1/2", backgroundColor:"yellow"}}>attack3</div>
                    <div style={{gridColumn:"2/2", backgroundColor:"yellow"}}>attack4</div>
                </div>
            </div>
            <div className="pokemonContainer">
                <img style={{height:"15rem"}} src={pokemon2.sprites.front_default}/>
                <p>{pokemon1.name}</p>
            </div>
        </div>
    )
}