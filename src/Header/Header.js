import './Header.scss';

const header = ( { page, updatePage} ) => {

/*
add active class style
add ternary based on page to determine if button is active
add onClick for each button that changes page in App
*/

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
                    className={page === 'code' ? 'active-button' :'code-button'}
                    onClick={e => updatePage('code')}
                    >CODE</button>
                </li>
                <li>
                    <button id='exhibits' 
                    className={page === 'exhibits' ? 'active-button' : 'exhibits-button'}
                    onClick={e => updatePage('exhibits')}
                    >EXHIBITS</button>
                </li>
                <li>
                    <button id='games' 
                    className={page === 'games' ? 'active-button' : 'games-button'}
                    onClick={e => updatePage('games')}
                    >GAMES</button>
                </li>
                <li>
                    <button id='music' 
                    className={page === 'music' ? 'active-button' : 'music-button'}
                    onClick={e => updatePage('music')}
                    >MUSIC</button>
                </li>
            </nav>
        </header>
    )
}

export default header;