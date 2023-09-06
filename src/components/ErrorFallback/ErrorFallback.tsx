import {FC} from 'react'
import './ErrorFallback.scss'
const ErrorFallback:FC<any> = ({error}) => {
	return (
		<div role="alert" className="ErrorFallback">
			<p>Something went wrong</p>
			<pre>Error Message: {error.message}</pre>
		</div>
	)
}

export default ErrorFallback