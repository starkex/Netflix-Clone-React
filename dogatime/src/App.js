import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';


function App() {
  return (
   <div className="App.css">
      <h1>Sup Broo</h1>

   <Row title="DogaTime Originals" fetchUrl={request.fetchNetflixOriginals}></Row>
   <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
   </div>
   
        );
}

export default App;
