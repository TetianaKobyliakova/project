import React from 'react'
import './SmallRecipe.css'

const SmallRecipe = ({name, date, image}) => {
    return (
        <li className="recipe">
					<a href="#">
						<img src={image} alt=""/>
						<h6 className="date">{date}</h6>
						<h3 className="title">{name}</h3>
					</a>
				</li>
    )
}
export default SmallRecipe