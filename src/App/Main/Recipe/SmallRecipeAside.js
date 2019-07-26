import React from 'react'
import './SmallRecipeAside.css'
import {Link} from "react-router-dom"

const SmallRecipeAside = ({name, date, image, id, match}) => {
	
    return (
        <div className="recipe-aside">
					<Link to={`${match.url.slice(0, match.url.lastIndexOf('/'))}/${id}`}>
						<img src={image} alt=""/>
						<h6 className="date">{date}</h6>
						<h3 className="title">{name}</h3>
                     </Link>
				</div>
    )
}
export default SmallRecipeAside