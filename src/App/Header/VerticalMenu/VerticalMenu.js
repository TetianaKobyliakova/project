import React from 'react'
import './VerticalMenu.css'

const VerticalMenu = () => {
    return(
        <nav className="vertical-menu">
            <label htmlFor="hamburger"></label>
                <input type="checkbox" id="hamburger"/>
                
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
		</nav>
    )
}
export default VerticalMenu