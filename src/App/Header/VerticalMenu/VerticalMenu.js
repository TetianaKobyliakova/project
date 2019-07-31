import React from 'react'
import './VerticalMenu.css'
import {Link} from 'react-router-dom'

const VerticalMenu = () => {
    return(
        <nav className="vertical-menu">
            <label htmlFor="hamburger"></label>
                <input type="checkbox" id="hamburger"/>
                
            <ul>
                <li><Link to="/appetizers">Закуски</Link></li>
                <li><Link to="/salads">Салати</Link></li>
                <li><Link to="/soups">Супи</Link></li>
                <li><Link to="/main-courses">Головні страви</Link></li>
                <li><Link to="/baking">Випічка</Link></li>
                <li><Link to="/desserts">Десерти</Link></li>
                <li><Link to="/drinks">Напої</Link></li>
                <li><Link to="/liked">Улюблене</Link></li>
            </ul>
		</nav>
    )
}
export default VerticalMenu