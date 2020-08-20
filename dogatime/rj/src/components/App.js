import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Loader from './Loader';
import Row from './Row';
import requests from '../requests';

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <Row
            title='Netflix Originals'
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title='Trending Now' fetchURL={requests.fetchTrending} />
          <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
          <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
          <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
          <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
          <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
          <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
        </>
      )}
    </div>
  );
};

export default App;
