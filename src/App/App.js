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
          {/* <div className="empty-field"></div> */}
        </div>
        <section className="bio-container">
          <div className="bio-header">
            <h1 className="name">MATT UMLAND</h1>
            <div className="icon-links">
                <a className="logo-link" href="https://github.com/mattumland" target="_blank" rel="noopener noreferrer">
                  <img className="logo" src={gitlogo} alt="the Github logo"/>
                </a>
                <a className="logo-link" href="https://twitter.com/MattUmland3" target="_blank" rel="noopener noreferrer">
                  <img className="logo" src={twitlogo} alt="the Twitter logo"/>
                </a>
                  <a className="logo-link" href="https://www.instagram.com/matt.umland/" target="_blank" rel="noopener noreferrer">
                  <img className="logo" src={gramlogo} alt="the Instagram logo"/>
                </a>
            </div>
          </div>
          <article className="bio">
            <h2>Multi-discipline creator specializing in interactive experiences. Full-time full-stack developer. Electro-soul crooner. Designer of games. Rock band member. Museum maker. Exhibit producer.</h2>
          </article>
        </section>
      </article>
    </section>
  );
}

export default App;
