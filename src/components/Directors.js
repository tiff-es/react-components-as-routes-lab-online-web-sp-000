import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,index)=>{
        return(
          <div>
            {director.name}
            <ul>
            {director.movies.map((movie,index)=> {

              return (<li key={index}>{movie}</li>)
            })}
            </ul>
          </div>
        )})}
    </div>
  );
}

export default Directors

function mapDirectors(directors) {
  console.log(directors)
}
