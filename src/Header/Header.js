import './Header.scss';

const header = ( { page, updatePage} ) => {

    return (
        <header>
            <nav>
                <li>
                    <button id='home' 
                    className={page === 'home' ? 'active-button' :'home-button'}
                    onClick={e => updatePage('home')}
                    >MATT UMLAND</button>
                </li>
                <li>
                    <button id='code' 
                    className={page === 'code' ? 'active-button' :'other-button'}
                    onClick={e => updatePage('code')}
                    >CODE</button>
                </li>
                <li>
                    <button id='games' 
                    className={page === 'games' ? 'active-button' : 'other-button'}
                    onClick={e => updatePage('games')}
                    >GAMES</button>
                </li>
                <li>
                    <button id='music' 
                    className={page === 'music' ? 'active-button' : 'other-button'}
                    onClick={e => updatePage('music')}
                    >MUSIC</button>
                </li>
                <li>
                    <button id='exhibits' 
                    className={page === 'exhibits' ? 'active-button' : 'other-button'}
                    onClick={e => updatePage('exhibits')}
                    >EXHIBITS</button>
                </li>
            </nav>
        </header>
    )
}

export default header;