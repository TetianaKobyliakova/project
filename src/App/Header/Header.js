import React from "react"
import './Header.css'
import Logo from './Logo/Logo'
import SocialMedia from './SocialMedia/SocialMedia'
import VerticalMenu from './VerticalMenu/VerticalMenu'
import Search from './Search/Search'

const Header = () => {
    return (
    <header className="header">
		<div className="container">
			<div className="header-flex-row">
                <div class="col-for-logo">
                    <Logo />
                </div>
				<div class="col-for-social-media">
                    <SocialMedia />
                    <VerticalMenu />
                </div>	 
				<div className="col-for-search">
					<Search/>
				</div>
			</div>
		</div>
	</header>
    )
}

export default Header