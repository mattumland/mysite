import Header from '../Header/Header'
import './App.scss';
import { useState } from 'react';
import portrait from '../images/temp-portrait.png'
import gitlogo from '../images/gitlogo.png';
import gramlogo from '../images/gramlogo.png';
import itchlogo from '../images/itchlogo.png';
import camplogo from '../images/camplogo.png';
import twitlogo from '../images/twitlogo.png';




const App = () => {

  const [page, setPage] = useState('home')

  const updatePage = (newPage) => {
    setPage(newPage);
  }

  return (
    <section className="app-background">
      <Header 
        page={page}
        updatePage={updatePage}
      />
      <article className="home-view">
        <div className="portrait-container">
          <img className="portrait-img" src={portrait} alt="portrait of matt umland"/>
        </div>
        <section className="bio-container">
          <div className="bio-header">
            <h1 className='name'>MATT UMLAND</h1>
            <ul className='icon-links'>
              <li>
                <a className="logo-container" href="https://github.com/mattumland" target="_blank" rel="noopener noreferrer">
                  <img className="logo" src={gitlogo} alt="the Github logo"/>
                </a>
              </li>
              <li>
                <a className="logo-container" href="https://github.com/mattumland" target="_blank" rel="noopener noreferrer">
                  <img className="logo" src={twitlogo} alt="the Twitter logo"/>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
 

    </section>
  );
}

export default App;
