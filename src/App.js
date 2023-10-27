
import './App.css';
import Row from './Components/Row';
import requests from './request';
import instance from './instanceConfig';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <Navbar/>
      <Banner/>
     
      <Row title={"NetflixOriginals"} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} />
      <Row title={"TopRated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"ActionMovies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"ComedyMovies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"HorrorMovies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"RomanceMovies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
      </header>
     
    </div>
  );
}

export default App;
