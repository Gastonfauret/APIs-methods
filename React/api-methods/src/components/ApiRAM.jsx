import { useEffect, useState } from "react";

function ApiRAM() {
    const url = "https://rickandmortyapi.com/api/character";
    const [todos, setTodos] = useState()

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json();
        setTodos(responseJson)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <ul>
                {todos.map((todo, index) => {
                        return <li key={index}> {todo.results.id} </li>
                    })
                }
            </ul>
        </>
    )
}

export default ApiRAM;