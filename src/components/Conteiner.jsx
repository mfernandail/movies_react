import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';

function Conteiner({ setMovie, setError }) {
  return (
    <div className="app-container">
      <Header />

      <main>
        <h1>Movies</h1>
        <SearchBar setMovie={setMovie} setError={setError} />
      </main>

      <Footer />
    </div>
  );
}
export default Conteiner;
