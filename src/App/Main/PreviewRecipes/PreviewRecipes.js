import React from 'react'
import './PreviewRecipes.css'
import SmallRecipe from './SmallRecipe'

import recipes from './recipes'

const PreviewRecipes = ({match}) => {
    
       return (
        
        <ul className="flex-row-recipe">
            {
                recipes.filter((item)=>(item.type===match.path.substring(1))).map(({name, date, image, id})=>(
                    <SmallRecipe 
                        name={name}
                        date={date}
                        image={image}
                        key={id}
                        id={id}
                        match={match}
                        
                    />
                ))
            }

        </ul>

    )
}
export default PreviewRecipes