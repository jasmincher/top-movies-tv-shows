import React from 'react';
import '../css/Card.css'


function Card(props) {
    console.log(props)
    return (

        <a href={`https://www.themoviedb.org/${props.cardType}/${props.image.id}`} target="_blank">

            <div className="card-container" >

                <div className="card-overlay">
                    <p className="card-title">{props.image.title} {props.image.name}</p>
                    <p className="card-overview">{props.image.overview} </p>
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${props.image.poster_path}`} className="card-size" />


            </div>
        </a>




    )
}


export default Card;