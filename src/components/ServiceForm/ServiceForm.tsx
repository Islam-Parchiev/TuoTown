import React,{useRef} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ToastContainer,toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { IServiceFormFields } from '../../types/Form'

import styles from './ServiceForm.module.scss'


const ServiceForm: React.FC = () => {
	const notify = () => toast.success('Отправлено!', {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IServiceFormFields>({
		mode: 'onChange',
	})
	const sendEmail = () => {
	
		emailjs.sendForm('service_c5fenef', 'template_xoiy8ec', form.current, 'DQkHD520RftRbJ7wx')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });

	  };

	const onSubmit: SubmitHandler<IServiceFormFields> = data => {
		console.log(data)
		sendEmail();
		notify()
		reset()
	}
	const form = useRef<any>();

 
	return (
		<div className={styles.ServiceForm__wrapper}>
			<form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.ServiceForm}>
				<div className={styles.ServiceForm__top}>
					<label className={styles.ServiceForm__input}>
						<span>Тема</span>
						<input
							{...register('theme', {
								maxLength: {
									value: 30,
									message: 'Максимальная длина  30 сиволов',
								},
								minLength: {
									value: 8,
									message: 'Минимальная длина  8 сиволов',
								},
							})}
							type="text"
							className={`input-reset ${styles.focus}`}
							placeholder="Неполадки с ножом"
						/>
						<span className={styles.focusBorder}></span>
						{errors.theme && (
							<div style={{ color: 'red' }}>
								{errors?.theme?.message}
							</div>
						)}
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Email</span>
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
							type="email"
							className={`input-reset ${styles.focus}`}
							placeholder="Ваша почта"
						/>
						<span className={styles.focusBorder}></span>
						{errors.email && (
							<div style={{ color: 'red' }}>
								{errors?.email?.message}
							</div>
						)}
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Имя</span>
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
							type="text"
							className={`input-reset ${styles.focus}`}
							placeholder="Алексей"
						/>
						<span className={styles.focusBorder}></span>
						{errors.name && (
							<div style={{ color: 'red' }}>
								{errors?.name?.message}
							</div>
						)}
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Телефон</span>
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
							type="phone"
							className={`input-reset ${styles.focus}`}
							placeholder="+7 (___) ___-__-__"
						/>
						<span className={styles.focusBorder}></span>
						{errors.phone && (
							<div style={{ color: 'red' }}>
								{errors?.phone?.message}
							</div>
						)}
					</label>
				</div>
				<div className={styles.ServiceForm__bottom}>
					<span>Комментарий</span>
					<div className={styles.ServiceForm__textarea}>
						<textarea
							{...register('text', {
								required: 'Text is require field!',

								maxLength: {
									value: 350,
									message: 'Максимальная длина текста 350 сиволов',
								},
								minLength: {
									value: 10,
									message: 'Минимальная длина текста 10 сивола',
								},
							})}
							className={`input-reset ${styles.focuss}`}
							placeholder="Впишите ваше сообщение"></textarea>
						<span className={styles.focusBorder}>
							<i></i>
						</span>
						{errors.text && (
							<div style={{ color: 'red' }}>
								{errors?.text?.message}
							</div>
						)}
					</div>
				</div>
				<button
					type="submit"
					className={`btn-reset ${styles.ServiceForm__btn}`}>
					Отправить
				</button>
			</form>
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

export default ServiceForm
