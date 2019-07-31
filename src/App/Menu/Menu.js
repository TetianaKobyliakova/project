import React from 'react'
import './Menu.css'
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <nav className="menu">
		<div className="container">
				<ul>
					<li><Link to="/appetizers">Закуски</Link></li>
					<li><Link to="/salads">Салати</Link></li>
					<li><Link to="/soups">Супи</Link></li>
					<li><Link to="/main-courses">Головні страви</Link></li>
					<li><Link to="/bakery">Випічка</Link></li>
					<li><Link to="/desserts">Десерти</Link></li>
					<li><Link to="/drinks">Напої</Link></li>
					<li><Link to="/liked">Улюблене</Link></li>
				</ul>
		</div>
	</nav>
    )
}
export default Menu