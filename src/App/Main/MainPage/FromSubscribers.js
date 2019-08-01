import React from 'react'
import recipes from '../PreviewRecipes/recipes'
import {Link} from 'react-router-dom'

const FromSubscribers = () => {
    return(
        <div>
            <h2 className="new-title">Рецепти від дописувачів</h2>
            <hr/>
            <ul className="flex-row-recipe">
                {
                    recipes.filter((recipe)=>recipe.fromSubscribers).map((recipe)=>(
                        <li className="recipe" key={recipe.id}>
                        <img src={require(`../../../images/${recipe.image}`)} alt=""/>
							<h6 className="date">{recipe.date}</h6>
                            <Link to={`/project/${recipe.type}/${recipe.id}`}>
								<h3 className="title">{recipe.name}</h3>
                            </Link>
                        </li>
                    ))
                }
            </ul>
			
        </div>
    )
}

export default FromSubscribers