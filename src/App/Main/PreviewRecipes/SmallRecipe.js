import React, {Component} from 'react'
import './SmallRecipe.css'
import {Link} from "react-router-dom"

class SmallRecipe extends Component {
	
	likeChange=()=> {
		if(this.props.isLiked){
			this.props.removeLike(this.props.id)
		}else{
			this.props.addLike(this.props.id)
		}
	
	}



	render(){
		const {
			name, date, image, match, id, isLiked
		}=this.props
		const img = image
		return (
			<li className="recipe">
						
							<img src={require(`../../../images/${img}`)} alt=""/>
							<h6 className="date">{date}</h6>
							<Link to={`${match.url}/${id}`}>
								<h3 className="title">{name}</h3>
							</Link>
							<button onClick={()=>this.likeChange(id)}>
								{isLiked?<span className="like">&#9829;</span>:<span className="like">&#9825;</span>}
							</button>
						
					</li>
		)

	}
   
}
export default SmallRecipe