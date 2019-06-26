import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <form name = "search" action = "" method = "get">
                <input className = "text-input" type = "search" placeholder = "Пошук"/>

                <button type = "submit"></button>
            </form>
		</div>
    )
}
export default Search