
import './Header.scss';

const header = () => {
    return (
        <header>
            <nav>
                <li>
                    <button className='home-button'>MATT UMLAND</button>
                </li>
                <li>
                    <button className='code-button'>CODE</button>
                </li>
                <li>
                    <button className='exhibits-button'>EXHIBITS</button>
                </li>
                <li>
                    <button className='games-button'>GAMES</button>
                </li>
                <li>
                    <button className='music-button'>MUSIC</button>
                </li>
            </nav>
        </header>
    )
}

export default header;