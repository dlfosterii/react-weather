import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>About this Site</h1>
            <p>This site is simple site using <i>React</i> and <i>Redux</i>.</p>
            <p>It uses the <a href="https://openweathermap.org/" target="_blank" >Open Weather API</a> to search for weather forecasts from over 200,000 locations worldwide.
            <br/>It uses four card components and two CSS files for styling.</p>
        </div>
    )
}
