import React from "react";

function Pokemon({data}){

    return (
            <article>
                 <img
                    src={data.sprites.front_shiny}
                    alt={data.forms[0].name}
                />
                <h2>{data.forms[0].name}</h2>}
                <ul>
                    {data.abilities.map((entry) => {
                        return(<li>{entry.ability.name}</li>)
                    })}
                </ul>
                <p>{data.weight}</p>
                <p>{data.moves.length}</p>
            </article>
    );
}

export default Pokemon;