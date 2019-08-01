import React from 'react'
import recipes from './recipes'
import {getRecipesMap} from './recipes'
import {Link} from 'react-router-dom'
import {keys} from 'lodash'

const Liked=({likeRecipesState})=>{
    const recipesMap=getRecipesMap(recipes)
    return(
        <div>
            <h1>Улюблене</h1>
            <ul className="flex-row-recipe">

                {
                    keys(likeRecipesState).filter((key)=> likeRecipesState[key])
                    .map((key)=>(
                        <li className="recipe" key={key}>
                        <img src={require(`../../../images/${recipesMap[key].image}`)} alt=""/>
							<h6 className="date">{recipesMap[key].date}</h6>
                            <Link to={`/project/${recipesMap[key].type}/${key}`}>
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