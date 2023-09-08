const SliderPagination = () => {
	return (
		<div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
			<span
				className="swiper-pagination-bullet"
				tabIndex={0}
				role="button"
				aria-label="Go to slide 1"
				aria-current="true"></span>
			<span
				className="swiper-pagination-bullet"
				tabIndex={0}
				role="button"
				aria-label="Go to slide 2"></span>
			<span
				className="swiper-pagination-bullet"
				tabIndex={0}
				role="button"
				aria-label="Go to slide 3"></span>
		</div>
	)
}

export default SliderPagination
