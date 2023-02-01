
import React, {useState} from 'react'
import {moviesData} from './Data'
import MovieCard from './MovieCard'

const MovieList = () => {
    console.log("movieData", moviesData)
  return (
    <div>  
    {moviesData.map((e)=><MovieCard movie={e} />)}
    </div>
  )
}

export default MovieList
