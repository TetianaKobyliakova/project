import React from "react"
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
		<div className="container">
			<div className="footer-flex">
				<div className="col-34">
					<p>&copy; Рецепти для гарного настрою, 2019</p>
				</div>
				<div className="col-66">
					<span>Приєднуйтесь до нас</span>
					<div className="footer-social-media">
						<div className="facebook"><a href="https://www.facebook.com/" target="_blank"></a></div>
						<div className="whatsapp"><a href="#" target="_blank"></a></div>
						<div className="instagram"><a href="#" target="_blank"></a></div>
						<div className="twitter"><a href="#" target="_blank"></a></div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    )
}
export default Footer