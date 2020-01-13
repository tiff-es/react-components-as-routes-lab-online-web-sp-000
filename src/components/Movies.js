import React from 'react';
import {movies} from '../data';

const Movies = () => {

  return (
    <div >
      <h1>Movies Page</h1>
      {movies.map((movie,index) => {return <div key={index} title={movie.title}>
        <a>Title: {movie.title}</a>
        <a>Time: {movie.time}</a>
        <a>
          Genres:
          <ul>{movie.genres.map((genre,index) =>  <li key={index}>{genre}</li>)}
          </ul>
        </a>
      </div>})}
    </div>
  );
};

export default Movies;


