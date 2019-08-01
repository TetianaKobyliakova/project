import React from 'react'
import "./Category.css"
import categories from "./categories"

const Category = ({match}) => {
const type = match.path.substring(1)
const img = categories[type].image
	
    return(
        <div className="category">
				<h1>{categories[type].title}</h1>
				<div className="flex-row">

					<div className="general-title">
							<p>{categories[type].text}</p>
						
					</div>
					<div className="image-for-description">
						<img src={require(`../../../images/${img}`)} alt=""/>
					</div>
				</div>
		</div>
    )
}

export default Category