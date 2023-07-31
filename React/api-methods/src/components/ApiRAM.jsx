function ApiRAM() {

    const url = "https://rickandmortyapi.com/api/character";

    async function fetchData() {
        const response = await fetch(url);
        const character = await response.json;
        console.log(character)
    }

    fetchData();
    
    return (
        <>
            
        </>
    )
}

export default ApiRAM;