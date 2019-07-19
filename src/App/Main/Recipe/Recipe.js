import React from 'react'
import recipes from '../PreviewRecipes/recipes'
import './Recipe.css'
const Recipe = ({match}) => {
    const recipeId = match.params.id
    const recipesMap=recipes.reduce((accObj, recipe)=>({
        ...accObj,
        [recipe.id]: recipe
    }), {})
    console.log(recipesMap[recipeId].steps)
    return(
        <main>
            <h1>{recipesMap[recipeId].name}</h1>
            <div className="main-image">
                <img className="main-image" src={recipesMap[recipeId].image}alt=""/>
            </div>


            <div class="flex-container">
            <div class="col-74">
            <div class="icons">
						<div class="icon-block">
							<div class="icon-1"></div>
							<div class="description">
								<p class="small">Рецепт на:</p>
								<p class="large">{recipesMap[recipeId].people}</p>
							</div>
						</div>
						<div class="icon-block">
							<div class="icon-2"></div>
							<div class="description">
								<p class="small">Підготовка:</p>
								<p class="large">{recipesMap[recipeId].preparation}</p>
							</div>
						</div>
						<div class="icon-block">
							<div class="icon-3"></div>
							<div class="description">
								<p class="small">Час приготування:</p>
								<p class="large">{recipesMap[recipeId].time}</p>
							</div>
						</div>
					</div>

            <div className="container-for-recipe">
                <div className="ingredients">
                    <h2 className="ingred">Інгредієнти</h2>
                    <ul>
                        {
                            recipesMap[recipeId].ingredients.map((item)=>(
                                <li>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <h2>Етапи приготування</h2>
                <div className="steps">
                {
                    
                    Object.keys(recipesMap[recipeId].steps).map((step, i)=>(
                        <div className="step"> 
                            
                            <p><span>{i+1}. </span>{recipesMap[recipeId].steps[step]}</p> 
                        </div>
                       
                    ))
                }
                </div>
                
            </div>
            </div>
            <div class="col-26">
					<h2>Вам може сподобатись</h2>
            </div>
            </div>
        </main>
    )
}

export default Recipe