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
        
            <Route path = "/project" exact component={MainPage}/>

            <Route path="/project/appetizers" exact  component={Category}/>
            <Route path="/project/appetizers"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/appetizers/:id"  component={Recipe}/>

            <Route path="/project/salads" exact component={Category}/>
            <Route path="/project/salads"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/salads/:id"  component={Recipe}/>

            <Route path="/project/soups" exact component={Category}/>
            <Route path="/project/soups"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/soups/:id"  component={Recipe}/>

            <Route path="/project/main-courses" exact component={Category}/>
            <Route path="/project/main-courses"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/main-courses/:id"  component={Recipe}/>

            <Route path="/project/bakery" exact component={Category}/>
            <Route path="/project/bakery"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/bakery/:id"  component={Recipe}/>
            
            <Route path="/project/desserts" exact component={Category}/>
            <Route path="/project/desserts"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/desserts/:id"  component={Recipe}/>

            <Route path="/project/drinks" exact component={Category}/>
            <Route path="/project/drinks"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/project/drinks/:id"  component={Recipe}/>

            <Route path="/project/liked" render={() => <Liked likeRecipesState={likeRecipesState}/>}/>
        
        
        </div>
    </main>
    )
    
}
export default Main