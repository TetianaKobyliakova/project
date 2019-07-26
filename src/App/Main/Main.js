import React from 'react'
import PreviewRecipes from './PreviewRecipes/PreviewRecipes'
import {Route} from 'react-router-dom'
import Category from './Category/Category'
import Recipe from './Recipe/Recipe'


const Main = () => {
    
    return (
    <main>
		<div className="container">
        
            <Route path="/appetizers" exact  render={() => <Category type={"закуски"}/>}/>
            <Route path="/appetizers"  exact component={PreviewRecipes}/>
            <Route path="/appetizers/:id"  component={Recipe}/>
            <Route path="/salads" exact render={() => <Category type={"салати"}/>}/>
            <Route path="/salads" exact render={PreviewRecipes}/>
            <Route path="/salads/:id"  component={Recipe}/>
            <Route path="/soups" exact render={() => <Category type={"супи"}/>}/>
            <Route path="/soups" exact render={PreviewRecipes}/>
            <Route path="/soups/:id"  component={Recipe}/>
        
        </div>
    </main>
    )
    
}
export default Main