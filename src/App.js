import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [resultData, setResultData] = useState(null);
    const endpoint = 'https://pokeapi.co/api/v2/';
    const query = 'pokemon/jigglypuff';

    async function fetchData(){
        try{
            const { data } = await axios.get(`${endpoint}${query}`);
            setResultData(data);
        } catch (e) {
            console.log(e);
        }
    }

    fetchData();

    // useEffect(()=>{
    //     fetchData()
    // },[resultData]);

  return (
    <div>
      Begin hier met de opdracht!
        <article>
            {resultData && <img
                src={resultData.sprites.front_shiny}
                alt={resultData.forms[0].name}
            />}
            {resultData && <h2>{resultData.forms[0].name}</h2>}
            {resultData && <ul>
                {resultData.abilities.map((entry) => {
                    return(<li>{entry.ability.name}</li>)
                })}
            </ul>}
            {resultData && <p>{resultData.weight}</p>}
            {resultData && <p>{resultData.moves.length}</p>}
        </article>
    </div>
  );
}

export default App;
