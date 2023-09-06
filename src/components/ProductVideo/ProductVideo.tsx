import { FC, useRef ,useState} from 'react'

import styles from './ProductVideo.module.scss'

const ProductVideo: FC = () => {
	const [play,setPlay] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null)

	const onPlay = () => {
		videoRef?.current?.play()
		setPlay(true)
	}
	const onStop = () => {
		videoRef?.current?.pause()
		setPlay(false)
	}
	return (
		<section className={styles.ProductVideo}>
			<div className={styles.ProductVideo__video}>
				<video onClick={onStop} ref={videoRef} poster="/img/Product/preview.jpg">
					<source src="/vidtou.mp4" />
					Тег video не поддерживается вашим браузером.
					<a href="video/duel.mp4">Скачайте видео</a>.
				</video>
				{
					play === false && <button className={`btn-reset ${styles.ProductVideo__play}`} onClick={onPlay}>
						<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
							<path d="M1.53688 0.978013C0.871153 0.55437 0 1.03258 0 1.82167V12.1783C0 12.9674 0.87115 
						13.4456 1.53688 13.022L9.67424 7.84366C10.2917 7.45071 10.2917 6.54929 9.67425 6.15634L1.53688 
						0.978013Z" fill="white"/>
						</svg>
					</button>
				}
			</div>
		</section>
	)
}

export default ProductVideo
