import React, { useState, useEffect } from 'react';
import instance from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseImgURL = 'https://image.tmdb.org/t/p/w200';

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchURL]);

  const handleClick = movie => {
    if (trailerURL) {
      setTrailerURL('');
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get('v'));
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const videoOpts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className='Row'>
      <h2 className='Row__title'>{title}</h2>
      <div className='Row__posters'>
        {movies.map((movie, idx) => (
          <img
            onClick={() => handleClick(movie)}
            key={idx}
            className={`Row__poster ${isLargeRow && 'Row__posterLarge'}`}
            src={`${baseImgURL}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name || 'No Name provided!'}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={videoOpts} />}
    </div>
  );
};

export default Row;
