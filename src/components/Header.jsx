import React, {useContext} from 'react';
import logo from "../assets/google_icon-icons.com_62736.png";
import rocket from '../assets/rocket-svgrepo-com.svg'
import {Link} from "react-router-dom";
import {Context} from "../App";

const Header = () => {
	const {theme, setTheme} = useContext(Context)
	React.useEffect(async () => {
		const response = await fetch('/api/v1/fakecards/')
		console.log(response.json())
	}, [])
	return (
		<div className="header">
			<div className="container">

				<div className="header__logo">
					<Link to={'/'}><img className='rocket' src={logo} alt={rocket}/></Link>
					<div className='text'>
						<h1> AntiFake inc</h1>
						<p>THE BEST распознователь fake news в ФакингШитВОРЛД</p>
					</div>

				</div>

				<div className='header__switch'>
					<div className='btn'></div>
				</div>
			</div>
		</div>
	);
};

export default Header;