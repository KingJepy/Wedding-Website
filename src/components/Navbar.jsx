import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    // add state to impement a mobile hamburger menu
    const [menuOpen, setMenuOpen] =useState(false);

    return (
        <nav className="navbar">
            <h1 className="nav-title">Leeah & Joe</h1>

            {/* hamburger button for mobile */}
            <button 
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Nav Menu"
            >
                ☰
            </button>

            {/* nav links */}
            <div className={`nav-links ${menuOpen ? "open" : ''}`}>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/details" onClick={() => setMenuOpen(false)}>Details</NavLink>
                <NavLink to="/rsvp" onClick={() => setMenuOpen(false)}>RSVP</NavLink>
                <NavLink to="/registry" onClick={() => setMenuOpen(false)}>Registry</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

