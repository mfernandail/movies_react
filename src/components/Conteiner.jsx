import Footer from './Footer';
import Header from './Header';
import Error from './Error';
import SearchBar from './SearchBar';

function Conteiner({ setMovie, error, setError }) {
  return (
    <div className="app-container">
      <Header />

      <main>
        <h1>Movies</h1>
        <SearchBar setMovie={setMovie} setError={setError} />

        <Error error={error} />
      </main>

      <Footer />
    </div>
  );
}
export default Conteiner;
