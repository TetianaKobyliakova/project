import React from 'react'
import "./Category.css"
import categories from "./categories"

const Category = ({type}) => {
	window.scrollTo(0, 0);
    return(
        <div className="category">
				<h1>{categories[type].title}</h1>
				<div className="flex-row">

					<div className="general-title">
							<p>{categories[type].text}</p>
						
					</div>
					<div className="image-for-description">
						<img src={categories[type].image} alt=""/>
					</div>
				</div>
		</div>
    )
}

export default Category