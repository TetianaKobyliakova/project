import React from 'react'
import PreviewRecipes from './PreviewRecipes/PreviewRecipes'
import {Route} from 'react-router-dom'
import Category from './Category/Category'
import Recipe from './Recipe/Recipe'
import MainPage from './MainPage/MainPage'
import Liked from './PreviewRecipes/Liked'


const Main = ({addLike, removeLike, likeRecipesState}) => {
    
    return (
    <main>
		<div className="container">
            <Route path = "/" exact component={MainPage}/>

            <Route path="/appetizers" exact  render={() => <Category type={"закуски"}/>}/>
            <Route path="/appetizers"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/appetizers/:id"  component={Recipe}/>

            <Route path="/salads" exact render={() => <Category type={"салати"}/>}/>
            <Route path="/salads"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/salads/:id"  component={Recipe}/>

            <Route path="/soups" exact render={() => <Category type={"супи"}/>}/>
            <Route path="/soups"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/soups/:id"  component={Recipe}/>

            <Route path="/main-courses" exact render={() => <Category type={"головні страви"}/>}/>
            <Route path="/main-courses"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/main-courses/:id"  component={Recipe}/>

            <Route path="/bakery" exact render={() => <Category type={"випічка"}/>}/>
            <Route path="/bakery"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/bakery/:id"  component={Recipe}/>
            
            <Route path="/liked" render={() => <Liked likeRecipesState={likeRecipesState}/>}/>
            
        
        </div>
    </main>
    )
    
}
export default Main