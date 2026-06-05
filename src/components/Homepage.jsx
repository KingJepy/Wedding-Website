/* 
This will be my home page
Id like to include the date, location and welcome message. 
There should also be a button to RSVP
*/


import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Carousel from './Carousel';
import "./Carousel.css";

function Homepage() {
    return (
        <div className="homePage">
            <h1>Welcome to Our Wedding Website</h1>
            <Carousel />
            <h2>Our Day: September 18th, 2027</h2>
            <h2>Location: The Hangar In Greenville</h2>
        </div>
    )
}

export default Homepage;