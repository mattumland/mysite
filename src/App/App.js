import Header from '../Header/Header'
import './App.scss';
import { useState } from 'react';
import portrait from '../images/temp-portrait.jpg'

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
          <img className="portait-img" src={[portrait]}/>
        </div>
        <section className="bio-container">
          <h1 className='name'>MATT UMLAND</h1>

        </section>
      </article>
 

    </section>
  );
}

export default App;
