import { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ setMovie, setError }) {
  const [movieInput, setMovieInput] = useState('mulan');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const movieSearch = movieInput.trim();

    if (movieSearch === '') {
      setError('Please enter a movie name');
      return;
    }

    if (movieInput.length < 2) {
      setError('Please enter at least 2 characters');
      return;
    }

    setError(null);
    setMovie(movieInput);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmitForm} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            value={movieInput}
            onChange={(e) => setMovieInput(e.target.value)}
            className="search-input"
            placeholder="Mulan"
            required
          />
          <button type="submit" className="search-btn">
            Search
          </button>

          <select className="filter-select">
            <option value="">All Types</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
