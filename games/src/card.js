import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Card({game}) {
    console.log(game)
    return (
        <Link to={`/games/${game}`} class="card-button">{game}</Link>
    )
}

export default Card