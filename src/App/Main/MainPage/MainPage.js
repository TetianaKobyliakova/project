import React from "react"
import NewRecipes from './NewRecipes'
import PopularRecipes from './PopularRecipes'
import FromSubscribers from './FromSubscribers'


const MainPage = () => {
    return(
        <div>
            <NewRecipes/>
            <PopularRecipes/>
            <FromSubscribers/>
        </div>
    )
}

export default MainPage