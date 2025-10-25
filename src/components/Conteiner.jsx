import Footer from './Footer'
import Header from './Header'
import Loading from './Loading'

function Conteiner() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <h1>Movies</h1>
        <Loading />
        <p>ll</p>
      </main>

      <Footer />
    </div>
  )
}
export default Conteiner
