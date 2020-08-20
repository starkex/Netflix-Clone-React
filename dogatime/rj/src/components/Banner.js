import React, { useState, useEffect } from 'react';
import instance from '../axios';
import requests from '../requests';
const baseBackdropURL = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovies(randomMovie);
      return request;
    };

    fetchData();
  }, []);

  const truncateString = (str, characters) => {
    return str?.length > characters
      ? `${str.substring(0, characters - 1)}...`
      : str;
  };

  return (
    <div
      className='Banner'
      style={{
        backgroundImage: `url(${baseBackdropURL}${movie?.backdrop_path})`
      }}
    >
      <div className='Banner__contents'>
        <h1 className='Banner__title'>
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className='Banner__buttons'>
          <button className='Banner__button' onClick="" >Play</button>
          <button className='Banner__button' onClick="" >My List</button>
        </div>
        <p className='Banner__description'>
          {truncateString(movie?.overview, 200)}
        </p>
      </div>
      <div className='Banner__fadeBottom'></div>
    </div>
  );
};

export default Banner;
