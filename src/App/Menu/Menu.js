import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <nav className="menu">
		<div className="container">
				<ul>
					<li><a href="#">Закуски</a></li>
					<li><a href="#">Салати</a></li>
					<li><a href="#">Супи</a></li>
					<li><a href="#">Основні страви</a></li>
					<li><a href="#">Випічка</a></li>
					<li><a href="#">Десерти</a></li>
					<li><a href="#">Напої</a></li>
					<li><a href="#">Соуси</a></li>
				</ul>
		</div>
	</nav>
    )
}
export default Menu