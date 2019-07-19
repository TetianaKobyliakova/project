import React from 'react'
import './SmallRecipe.css'
import {Link} from "react-router-dom"

const SmallRecipe = ({name, date, image, match, id}) => {
	console.log(match)
    return (
        <li className="recipe">
					<Link to={`${match.url}/${id}`}>
						<img src={image} alt=""/>
						<h6 className="date">{date}</h6>
						<h3 className="title">{name}</h3>
					</Link>
				</li>
    )
}
export default SmallRecipe