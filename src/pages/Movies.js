import React from 'react';
import ApiData from '../components/ApiData'
import '../css/Movies.css'

function Movies() {

  return (
    // <div className="movies-container">

      <ApiData dataType="movies" cardType="movie"/>
    // </div>
    )
  }

export default Movies;