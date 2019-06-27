import React from 'react'
import './PreviewRecipes.css'
import SmallRecipe from './SmallRecipe'

import recipes from './recipes'

const PreviewRecipes = () => {
    return (
        <ul className="flex-row-recipe">
            {
                recipes.map(({name, date, image, id})=>(
                    <SmallRecipe 
                        name={name}
                        date={date}
                        image={image}
                        key={id}
                    />
                ))
            }

        </ul>

    )
}
export default PreviewRecipes