import React from 'react';
import useHttp from "../hooks/http.hook";

const Check = () => {
	const {loading, request, error} = useHttp()
	const [form, setForm] = React.useState({description: null})

	const checkHandler = async () => {
		try {
			const data = await request('/api/v1/fakenews/', 'POST', {...form})
			console.log(data)
		} catch (e) {
		}
	}
	const changeHandler = event => {
		setForm({ description: event.target.value})
	}

	// React.useEffect(async () => {
	// 	fetch(`/api/v1/fakenews`)
	// }, [])

	return (
		<div className='main'>
			<div className='main__title'>
				<h1>
					Онлайн-сервис проверки проверки новости на уникальность
				</h1>
			</div>
			<div className='textarea'>
				<textarea
					maxLength='2500'
					placeholder='Введите вашу новость'
					value={form.description}
					onChange={changeHandler}
				>
				</textarea>
			</div>
			<div className='main__tools'>
				<div className='list list1'>
					<li>Всего символов:</li>
					<span>12</span>
				</div>
				<div className='list list2'>
					<li>Количество слов:</li>
					<span>1</span>
				</div>
				<button
					onClick={checkHandler}
					className='main__btn'>Проверить новость на fake
				</button>
			</div>
		</div>
	);
};

export default Check;