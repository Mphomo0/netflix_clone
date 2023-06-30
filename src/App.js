import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Row from './components/Row';
import fetchFromApi from './utils/fetchFromApi';


function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Row title="Trending Now" 
        fetchUrl={fetchFromApi.fetchTrending} 
        isLargeRow
        />
      <Row title="Popular Now" fetchUrl={fetchFromApi.fetchPopular} />
      <Row title="Top Rated" fetchUrl={fetchFromApi.fetchTopRated} />
      <Row title="UpComing" fetchUrl={fetchFromApi.fetchUpcoming} />
      <Row title="Treding on Tv" fetchUrl={fetchFromApi.fetchTvTrending} />
      <Row title="Top Rated" fetchUrl={fetchFromApi.fetchOnAir}/>
      <Row title="Discover Now" fetchUrl={fetchFromApi.fetchDiscover}/>
    </div>
  );
}

export default App;
