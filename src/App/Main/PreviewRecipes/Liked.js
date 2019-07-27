import React from 'react'
import recipes from './recipes'
import {Link} from 'react-router-dom'

const Liked=({likeRecipesState})=>{
    const recipesMap=recipes.reduce((accObj, recipe)=>({
        ...accObj,
        [recipe.id]: recipe
    }), {})
    return(
        <div>
            <h1>Улюблене</h1>
            <ul className="flex-row-recipe">

                {
                    Object.keys(likeRecipesState).filter((key)=> likeRecipesState[key])
                    .map((key)=>(
                        <li className="recipe" key={key}>
                        <img src={recipesMap[key].image} alt=""/>
							<h6 className="date">{recipesMap[key].date}</h6>
                            <Link to={`/${recipesMap[key].type}/${key}`}>
								<h3 className="title">{recipesMap[key].name}</h3>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Liked