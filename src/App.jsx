import { useState } from 'react';
import Conteiner from './components/Conteiner';
import './styles/App.css';
import useMovies from './hooks/useMovies';

function App() {
  // const [movie, setMovie] = useState(null);

  // const [typeOfMovie, setTypeOfMovie] = useState(null);

  const { searchMovie } = useMovies();

  const { movies, loading, error, searchMovies } = useMovies();

  const data = searchMovies('Avatar', null, null);
  console.log(data);

  console.log(searchMovie);
  return (
    <>
      <Conteiner setMovie={setMovie} error={error} setError={setError} />
    </>
  );
}

export default App;
