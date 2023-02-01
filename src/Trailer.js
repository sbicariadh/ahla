import React from 'react';
import {useParams} from 'react-router-dom';
import { moviesData } from './Data';

const Trailer = () => {
  const {id}=useParams()
  const filmID=moviesData.find((e)=>e.id==id)
  return (
    <div>
      <h1>{filmID.name}</h1>
      <img src={filmID.image}/>
      <h4>{filmID.description}</h4>
    </div>
  )
}

export default Trailer
