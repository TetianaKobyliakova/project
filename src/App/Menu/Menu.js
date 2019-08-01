import React from 'react'
import './Menu.css'
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <nav className="menu">
		<div className="container">
				<ul>
					<li><Link to="/project/appetizers">Закуски</Link></li>
					<li><Link to="/project/salads">Салати</Link></li>
					<li><Link to="/project/soups">Супи</Link></li>
					<li><Link to="/project/main-courses">Головні страви</Link></li>
					<li><Link to="/project/bakery">Випічка</Link></li>
					<li><Link to="/project/desserts">Десерти</Link></li>
					<li><Link to="/project/drinks">Напої</Link></li>
					<li><Link to="/project/liked">Улюблене</Link></li>
				</ul>
		</div>
	</nav>
    )
}
export default Menu