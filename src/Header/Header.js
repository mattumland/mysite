
import './Header.scss';

const header = () => {
    return (
        <header>
            <nav>
                <li>
                    <button className='nav-button'>MATT UMLAND</button>
                </li>
                <li>
                    <button className='nav-button'>CODE</button>
                </li>
                <li>
                    <button className='nav-button'>EXHIBITS</button>
                </li>
                <li>
                    <button className='nav-button'>GAMES</button>
                </li>
                <li>
                    <button className='nav-button'>MUSIC</button>
                </li>
            </nav>
        </header>
    )
}

export default header;