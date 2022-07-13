import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon.js";

function App() {
    const [resultData, setResultData] = useState(null);
    const [query, setQuery] = useState('pokemon');
    const endpoint = 'https://pokeapi.co/api/v2/';
    // const query = 'pokemon/jigglypuff';
    // const query2 = 'pokemon/ditto';
    // const query3 = 'pokemon';

    }
    useEffect(()=>{
    async function fetchData(){
        try{
            const { data } = await axios.get(`${endpoint}${query}`);
            setResultData(data);
        } catch (e) {
            console.log(e);
        }
    }

    fetchData();
    },[query]);

    // useEffect(()=>{
    //     fetchData()
    // },[resultData]);

  return (
    <div>
      Begin hier met de opdracht!
        <button onClick={setQuery(resultData.next.slice('v2/',))} {resultData.next && disabled}>Vorige</button>
        <button onClick={setQuery(resultData.previous.slice('v2/',))} {resultData.previous && disabled}>Volgende</button>

        {resultData && <ul>
            {resultData.results.map((entry) => {
                setQuery(entry.name);
                return(<Pokemon
                data={entry}
            />)})}
        </ul>}
    </div>
  );
}

export default App;
