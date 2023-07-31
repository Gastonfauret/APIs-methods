import RAM from '../images/RAM.png'
import '../styles/Header.css'

function header() {
    return (
        <>
            <div className="header-container">
                <img className='RAM-img' src={RAM} alt="RAM Photo" />
                <p className='RAM-title'>Rick And Morty API Tests</p>
            </div>
        </>
    )
}

export default header;