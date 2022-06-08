import React from 'react';
import contentImage from '../assets/uchyoba.jpg'
import search from  '../assets/loop-svgrepo-com.svg'
import game from '../assets/game-svgrepo-com.svg'
import {Link} from "react-router-dom";

const Home = () => {
	return (
		<div className='container'>
			<div className='content__title'>
				<h1> AntiFakeNews <p> является лучшей российской системой обнаружения фейковых новостей</p></h1>
			</div>
				<img src={contentImage} alt='img' />
			<div className='content__btn'>
				<Link to={'/check'}>
					<button className='btn search'>
						<img src={search} alt='search'/>
						<h1>Проверить новость</h1>
						<p>Загружайте и проверяйте свои работы</p>
					</button>
				</Link>
				<Link to={'/game'}>
					<button className='btn game'>
						<img src={game} alt='game'/>
						<h1>Сыграть в игру</h1>
						<p>Как ты думаешь, новость настоящая?</p>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;