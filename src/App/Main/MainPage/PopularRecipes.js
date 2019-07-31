import React from 'react'
import recipes from '../PreviewRecipes/recipes'
import {Link} from 'react-router-dom'


const PopularRecipes = () => {
    const popularRecipes = recipes.filter((recipe)=>recipe.popular)
    .sort((a, b)=>(Math.random()-0.5))
    .slice(0,4)
    console.log(popularRecipes)
    return (
        <div>
            <h2 className="new-title">Популярне</h2>
            <hr/>
            <div className="popular">
                <ul>
                    {
                        popularRecipes.map((recipe)=>(
                            <li>
                                <div><img src={recipe.roundImage} alt=""/></div>
						        <Link to={`${recipe.type}/${recipe.id}`}><h3 className="title">{recipe.name}</h3></Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default PopularRecipes