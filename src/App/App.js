import Header from '../Header/Header'
import './App.scss';
import { useState } from 'react';

const App = () => {

  const [page, setPage] = useState('home')

  const updatePage = (newPage) => {
    setPage(newPage);
  }

  return (
    <div className="app-background">
      <Header 
        page={page}
        updatePage={updatePage}
      />
    </div>
  );
}

export default App;
