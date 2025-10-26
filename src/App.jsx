import { useState } from 'react';
import Conteiner from './components/Conteiner';
import './styles/App.css';

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      <Conteiner setMovie={setMovie} setError={setError} />
    </>
  );
}

export default App;
