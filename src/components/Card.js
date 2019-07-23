import React from 'react';
import '../css/Card.css'


function Card(props) {
    console.log(props)
    return (
        <div className="card-container">

            <div className="card-overlay">
                <p>{props.image.title} {props.image.name}</p>
                <p>{props.image.overview} </p>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${props.image.poster_path}`} className="card-size" />



        </div>


    )
}


export default Card;