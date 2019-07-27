import React from 'react'
import './PreviewRecipes.css'
import SmallRecipe from './SmallRecipe'

import recipes from './recipes'

const PreviewRecipes = (props) => {
    
    console.log(props)
    
       return (
        
        <ul className="flex-row-recipe">
            {
                recipes.filter((item)=>(item.type===props.match.path.substring(1))).map(({name, date, image, id})=>(
                    <SmallRecipe 
                        name={name}
                        date={date}
                        image={image}
                        key={id}
                        id={id}
                        match={props.match}
                        addLike={props.addLike}
                        removeLike={props.removeLike}
                        isLiked={props.likeRecipesState[id]}
                        
                    />
                ))
            }

        </ul>

    )
}
export default PreviewRecipes