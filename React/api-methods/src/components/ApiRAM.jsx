import { useEffect, useState } from "react";
import '../styles/ApiRAM.css'

function ApiRAM() {
    const [characters, setCharacters] = useState([]);

    const getApi = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results)
            setCharacters(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <>
            <ul>
                <li className="title-list">Name Status Gender Species Dimension</li>
        { 
            characters.map( (character, index) => {
              return <li key={index} className="characters-list"> {character.name} {character.status} {character.gender} {character.species} {character.origin.name}</li>
            })
        }
      </ul>
        </>
    )
}

export default ApiRAM;