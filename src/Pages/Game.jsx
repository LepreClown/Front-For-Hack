import React from 'react';

const Game = ({text}) => {

	return (
		<div className='game'>
			<div className='game__title'>
				<h1>
					FAKE NEWS OR NOT?
					<p>Мы предлагаем тебе  оценить новость на её фейковость</p>
				</h1>
			</div>
			<div className='textarea'>
				{
					<textarea readOnly >{text}</textarea>
				}
			</div>
			<div className='game__tools'>
				<button className='btn1'>FAKE</button>
				<button className='btn2'>TRUE</button>
			</div>
		</div>
	);
};

export default Game;