//import './styles/App.css'
//import Header from './components/Header'
//import TypesButtons from './components/TypesButtons'
//import ApiRAM from './components/ApiRAM'

import { useEffect, useState } from "react";

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [character, setCharacter] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json();
    setCharacter(responseJson)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      {/* <Header/>
      <TypesButtons/>
      <ApiRAM/> */}

      <ul>
        {character.map((character, index) => {
          return <li key={index}> {character.id} </li>
        })
        }
      </ul>
    </>
  )
}

export default App
