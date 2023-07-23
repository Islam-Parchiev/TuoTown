import React from 'react'
import ContentLoader,{IContentLoaderProps} from 'react-content-loader'

const CardSkeleton:React.FC<IContentLoaderProps> = () => (
	<ContentLoader 
		speed={2}
		width={286}
		height={476}
		viewBox="0 0 296 506"
		backgroundColor="#9b8d8d"
		foregroundColor="#615f5f"
		
	>
		<rect x="152" y="267" rx="0" ry="0" width="10" height="0" /> 
		<rect x="8" y="1" rx="22" ry="22" width="286" height="410" /> 
		<rect x="9" y="474" rx="8" ry="8" width="56" height="14" /> 
		<rect x="76" y="475" rx="8" ry="8" width="60" height="13" /> 
		<rect x="10" y="426" rx="15" ry="15" width="185" height="27" />
	</ContentLoader>
)

export default CardSkeleton