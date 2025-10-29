import { useState } from 'react';

function useMovies() {
  const [useMovies, setUseMovies] = useState([]);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const searchMovie = async () => {
    const data = await fetch(`${baseUrl}?apikey=${apiKey}&t=avatar`);
    const result = await data.json();

    return result;
  };

  return {
    searchMovie,
  };
}
export default useMovies;

src / hooks / useMovies.js;
