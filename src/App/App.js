import Header from '../Header/Header'
import './App.scss';
import { useState } from 'react';

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
    </section>
  );
}

export default App;
