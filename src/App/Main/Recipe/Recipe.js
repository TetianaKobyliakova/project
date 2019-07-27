import React from 'react'
import recipes from '../PreviewRecipes/recipes'
import './Recipe.css'
import SmallRecipeAside from './SmallRecipeAside'
const Recipe = ({match}) => {
    const recipeId = match.params.id
    const recipesMap=recipes.reduce((accObj, recipe)=>({
        ...accObj,
        [recipe.id]: recipe
    }), {})

    window.scrollTo(0, 0);
    return(
        <main>
            <h1>{recipesMap[recipeId].name}</h1>
            <div className="main-image">
                <img className="main-image" src={recipesMap[recipeId].image}alt=""/>
            </div>


            <div className="flex-container">
            <div className="col-74">
            <div className="icons">
						<div className="icon-block">
							<div className="icon-1"></div>
							<div className="description">
								<p className="small">Рецепт на:</p>
								<p className="large">{recipesMap[recipeId].people}</p>
							</div>
						</div>
						<div className="icon-block">
							<div className="icon-2"></div>
							<div className="description">
								<p className="small">Підготовка:</p>
								<p className="large">{recipesMap[recipeId].preparation}</p>
							</div>
						</div>
						<div className="icon-block">
							<div className="icon-3"></div>
							<div className="description">
								<p className="small">Час приготування:</p>
								<p className="large">{recipesMap[recipeId].time}</p>
							</div>
						</div>
					</div>

            <div className="container-for-recipe">
                <div className="ingredients">
                    <h2 className="ingred">Інгредієнти</h2>
                    <ul>
                        {
                            recipesMap[recipeId].ingredients.map((item, index)=>(
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <h2>Етапи приготування</h2>
                <div className="steps">
                {
                    
                    Object.keys(recipesMap[recipeId].steps).map((step, i)=>(
                        <div className="step" key={i}> 
                            
                            <p><span>{i+1}. </span>{recipesMap[recipeId].steps[step]}</p> 
                        </div>
                       
                    ))
                }
                </div>
                
            </div>
            </div>
            <div className="col-26">
					<h2>Вам може сподобатись</h2>
                    
                    {
                    recipes.filter((item)=>(item.type===recipesMap[recipeId].type && item.id !==recipesMap[recipeId].id))
                    .sort((a, b)=>(Math.random()-0.5))
                    .slice(0,3)
                    .map(({name, date, image, id})=>(
                    <SmallRecipeAside 
                        name={name}
                        date={date}
                        image={image}
                        key={id}
                        id={id}
                        match={match}
                        
                        
                    />
                ))
                    }
                    
            </div>
            </div>
        </main>
    )
}

export default Recipe