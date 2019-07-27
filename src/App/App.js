import React, {Component} from "react"
import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Menu from './Menu/Menu'
import Main from './Main/Main'
import Footer from './Footer/Footer'
class App extends Component {

    state={
        likeRecipesState: {
           

        }
    }

    addLike=(recipeId)=> {
        this.setState((prevState)=>({
            likeRecipesState: {
                ...prevState.likeRecipesState,
                [recipeId]: true,
            }
        }))
    }
    removeLike=(recipeId)=> {
        this.setState((prevState)=>({
            likeRecipesState: {
                ...prevState.likeRecipesState,
                [recipeId]: false,
            }
        }))
    }

    render(){
        return (
            <div>
                <Header />
                <Menu />
                <Main addLike={this.addLike} 
                removeLike={this.removeLike}
                likeRecipesState={this.state.likeRecipesState} />
                <Footer />
            </div>
        )

    }
    
    
}
export default App