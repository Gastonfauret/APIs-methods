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
            <table className="characters-list-container">
                <thead>
                    <tr> 
                        <th>Name</th>
                        <th>Status</th>
                        <th>Gender</th>
                        <th>Species</th>
                        <th>Dimension</th>                        
                    </tr>
                </thead>
                <tbody>
                    {characters.map((character) => (
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.status}</td>
                            <td>{character.gender}</td>
                            <td>{character.species}</td>
                            <td>{character.origin.name}</td>                 
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* 
                    characters.map((character, index) => {
                        return <li key={index} className="characters-list"> {character.name} {character.status} {character.gender} {character.species} {character.origin.name}</li>
                    })
                }
            </ul> */}
        </>
    )
}

export default ApiRAM;