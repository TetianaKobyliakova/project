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

            <Route path="/appetizers" exact  component={Category}/>
            <Route path="/appetizers"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/appetizers/:id"  component={Recipe}/>

            <Route path="/salads" exact component={Category}/>
            <Route path="/salads"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/salads/:id"  component={Recipe}/>

            <Route path="/soups" exact component={Category}/>
            <Route path="/soups"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/soups/:id"  component={Recipe}/>

            <Route path="/main-courses" exact component={Category}/>
            <Route path="/main-courses"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/main-courses/:id"  component={Recipe}/>

            <Route path="/bakery" exact component={Category}/>
            <Route path="/bakery"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/bakery/:id"  component={Recipe}/>
            
            <Route path="/desserts" exact component={Category}/>
            <Route path="/desserts"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/desserts/:id"  component={Recipe}/>

            <Route path="/drinks" exact component={Category}/>
            <Route path="/drinks"  exact render={(props) => <PreviewRecipes addLike={addLike}
            removeLike={removeLike}
            likeRecipesState={likeRecipesState} {...props}/>}/>
            <Route path="/drinks/:id"  component={Recipe}/>

            <Route path="/liked" render={() => <Liked likeRecipesState={likeRecipesState}/>}/>
            
        
        </div>
    </main>
    )
    
}
export default Main