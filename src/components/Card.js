import React from 'react';
import '../css/Card.css';
import { missing } from '../components/MissingPosters';


function Card(props) {
    
    let missing_poster;
    let poster = `https://image.tmdb.org/t/p/original/${props.image.poster_path}`;
    missing.map( i => {if( i.title == props.image.title ) missing_poster = i.posterImg });
    const poster_path = props.image.poster_path == null ? missing_poster : poster;


    return (

        <a href={`https://www.themoviedb.org/${props.cardType}/${props.image.id}`} target="_blank">

            <div className="card-container" >

                <div className="card-overlay">
                    <p className="card-title">{props.image.title} {props.image.name}</p>
                    <p className="card-overview">{props.image.overview} </p>
                </div>

                <img src={poster_path} className="card-size"/>


            </div>
        </a>


    )
}


export default Card;