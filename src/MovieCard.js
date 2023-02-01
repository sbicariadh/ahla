import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  console.log(movie)
  return (
    <div>
      <img src={movie.image}/>
      <h2>{movie.name}</h2>
      <Link to={`/trailer/${movie.id}`} ><button>More details</button></Link>
    </div>
  )
}

export default MovieCard
