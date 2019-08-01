import React from 'react'
import './NewRecipes.css'
import recipes from '../PreviewRecipes/recipes'
import {Link} from 'react-router-dom'


const NewRecipes = () => {

    const newRecipes = recipes.filter((recipe)=>recipe.new)
    .sort((a, b)=>(Math.random()-0.5))
    .slice(0,5)

        return(
        <div>
            <h2 className="new-title">Нові рецепти</h2>
            <hr/>
            <div className="flex-container-new">
				<div className="col-23">
                 {newRecipes.slice(0,2).map((recipe)=>(
                    <div className="recipe-new" key={recipe.id}>
						
							<img src={require(`../../../images/${recipe.image}`)} alt=""/>
							<h6 className="date">{recipe.date}</h6>
							<Link to={`/project/${recipe.type}/${recipe.id}`}><h3 className="title">{recipe.name}</h3></Link>
						
					</div>
                 ))} 
					
					
				</div>
				<div className="col-49">
                {newRecipes.slice(2,3).map((recipe)=>(
                    <div className="recipe-new" key={recipe.id}>
						
							<img src={require(`../../../images/${recipe.image}`)} alt=""/>
							<h6 className="date">{recipe.date}</h6>
							<Link to={`/project/${recipe.type}/${recipe.id}`}><h3 className="title">{recipe.name}</h3></Link>
                            <p>{recipe.description}</p>
						
					</div>
                 ))}
					
				</div>
				<div className="col-23">
                {newRecipes.slice(3,5).map((recipe)=>(
                    <div className="recipe-new" key={recipe.id}>
						
							<img src={require(`../../../images/${recipe.image}`)} alt=""/>
							<h6 className="date">{recipe.date}</h6>
							<Link to={`/project/${recipe.type}/${recipe.id}`}><h3 className="title">{recipe.name}</h3></Link>
						
					</div>
                 ))}
				</div>
			</div>
			
        </div>

    )
}

export default NewRecipes