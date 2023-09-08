import React from 'react'

import { ToastContainer, toast } from 'react-toastify'

import { useForm, SubmitHandler } from 'react-hook-form'

import { useAppSelector } from '../../redux/store'

import { IShippingFields } from '../../types/Form'

import 'react-toastify/dist/ReactToastify.css'
import './Form.scss'
import { selectCart } from '../../redux/slices/cartSlice'

const Form: React.FC = () => {
	const { items } = useAppSelector(selectCart)
	const notify = () =>
		toast.success('Заказ оформлен', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IShippingFields>({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<IShippingFields> = data => {
		const order = {
			...data,
			...items,
		}
		notify()

		console.log('Ваш заказ:', order)
		reset()
	}
	return (
		<div className="Form">
			<h2 className="Form-title">
				Для подтверждения заказа - введите ваши данные и мы перезвоним вам
			</h2>
			<div className="Form-wrapper">
				<form onSubmit={handleSubmit(onSubmit)} className="Form-form">
					<div className="Form-inputs">
						<label className="Form-label">
							<span>Получатель</span>
							<input
								{...register('name', {
									required: 'Name is require field!',
									maxLength: {
										value: 15,
										message: 'Максимальная длина имени 15 сиволов',
									},
									minLength: {
										value: 3,
										message: 'Минимальная длина имени 3 сивола',
									},
								})}
								className="input-reset"
								type="text"
								placeholder="Имя Фамилия"
							/>
							{errors.name && (
								<div style={{ color: 'red' }}>
									{errors?.name?.message}
								</div>
							)}
						</label>
						<label className="Form-label">
							<span>Мобильный телефон</span>
							<input
								{...register('phone', {
									required: 'Phone is require field!',

									maxLength: {
										value: 25,
										message: 'Максимальная длина телефона 15 сиволов',
									},
									minLength: {
										value: 9,
										message: 'Минимальная длина телефона 3 сивола',
									},
									pattern: {
										value: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
										message: 'Please enter valid phone',
									},
								})}
								className="input-reset"
								type="text"
								placeholder="+7 (___) ___-__-__"
							/>
							{errors.phone && (
								<div style={{ color: 'red' }}>
									{errors?.phone?.message}
								</div>
							)}
						</label>
						<label className="Form-label">
							<span>E-mail</span>
							<input
								{...register('email', {
									required: 'Email is require field!',
									maxLength: 30,
									minLength: 10,
									pattern: {
										// eslint-disable-next-line max-len
										value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,

										message: 'Please enter valid email!',
									},
								})}
								className="input-reset"
								type="text"
								placeholder="Ваша почта"
							/>
							{errors.email && (
								<div style={{ color: 'red' }}>
									{errors?.email?.message}
								</div>
							)}
						</label>
					</div>
					<div className="Form-info">
						<p>
							Нажимая «Выбрать способ доставки», подтверждаю, что я
							ознакомлен с условиями{' '}
							<a href="/">
								Публичного договора оферты и Политикой
								конфиденциальности
							</a>
							, а также согласен получать информационную рассылку
						</p>
						<button
							disabled={items.length === 0}
							className="btn-reset Form-btn"
							type="submit">
							Отправить форму
						</button>
					</div>
				</form>
			</div>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
}

export default Form
