import React from 'react'

import { motion } from 'framer-motion'

import './AboutUs.scss'

const aboutUsTopAnimation = {
	hidden:{
      	x:-1800,
	  	// opacity:0,
	},
	visible:(custom:any)=>({
		x:0,
	  	// opacity:1,
	  	transition:{delay:custom * 0.5},
	}),
}
const aboutUsBottomAnimation = {
	hidden:{
      	x:1800,
	  	// opacity:0,
	},
	visible:(custom:any)=>({
		x:0,
	  	// opacity:1,
	  	transition:{delay:custom * 0.5},
	}),
}
const AboutUs: React.FC = () => {
	return (
		<motion.section  
			data-testid="AboutUs" 
			className="AboutUs"
			initial="hidden"
			whileInView="visible"
			viewport={{amount:0.2,once:true}}>
			<div className="container AboutUs__container">
				<motion.div 
					className="AboutUs__top"
					variants={aboutUsTopAnimation}
					custom={1}>
					<div className="AboutUs__img">
						<img src="/img/AboutUs/1.jpg" alt="" />
					</div>
					<div className="AboutUs__top-text">
						<h2 className="AboutUs__title">
							«Tuotown» – легендарные ножи, создающие шедевры
						</h2>
						<p className="AboutUs__descr">
							Компания «Tuotown» – эксклюзивный представитель
							профессиональных кухонных ножей, изготовленных лучшими
							мастерами Восточной Азии с применением передового
							европейского оборудования и современных материалов. Они
							отличаются идеальным балансом и фантастической
							остротой. Сочетают в себе вековые традиции и новейшие
							разработки. Также предлагаем широкий ассортимент
							сопутствующих товаров.
						</p>
					</div>
				</motion.div>
				<motion.div className="AboutUs__bottom"
					variants={aboutUsBottomAnimation}
					custom={1}>
					<div className="AboutUs__bottom-text">
						<p>
							Истинная красота ножа — совершённая функциональность
							и визуальная гармония. Этот предмет издревле
							сопутствовал человеку: от зари цивилизации
							до сегодняшних дней. На протяжении всей истории
							человечества он был верным помощником, незаменимым
							инструментом и грозным оружием. Предлагаем изделия
							Hi-end качества по доступным ценам настоящим ценителям
							японских ножей.
						</p>
						<p>
							Отличительной чертой нашего интернет-магазина являются
							уникальные торговые предложения, эксклюзивность
							продукции, неизменно высокое качество и выгодные цены.
							Осуществляем продажи элитных японских кухонных ножей
							для профессионалов и любителей. В обширной
							ассортиментной линейке представлены изделия
							для различных потребностей и любого бюджета —
							от столовых приборов до шеф-ножей.
						</p>
						<h3 className="AboutUs__bottom-title">
							Ножи «Tuotown» – это главный инструмент поваров
							и секрет кулинарного мастерства
						</h3>
					</div>
					<div className="AboutUs__bottom-img">
						<img src="/img/AboutUs/2.jpg" alt="" />
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}

export default AboutUs
