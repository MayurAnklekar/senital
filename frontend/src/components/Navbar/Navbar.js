import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie'
import "./Navbar.css";
const cookies = new Cookies();

const Navbar = () => {
    const id = cookies.get('userId');
	return (
		<nav className="nav">
			<Link to="/" className="site-title">
				Covenant
			</Link>
			<ul>
				<li>
					{id&&<Link to="/disputes">Disputes</Link>}
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);

	
};

export default Navbar;
