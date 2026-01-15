import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="nav-title">Leeah & Joe</h1>

            <div className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/details">Details</NavLink>
                <NavLink to="/rsvp">RSVP</NavLink>
                <NavLink to="/registry">Registry</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

