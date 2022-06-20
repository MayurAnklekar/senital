import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/" className="site-title">
				Covenant
			</Link>
			<ul>
				<li>
					<Link to="/disputes">Disputes</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);

	
};

export default Navbar;
