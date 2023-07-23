import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => {
 return <ContentLoader 
      speed={2}
      width={772}
      height={556}
      viewBox="0 0 772 556"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="152" y="267" rx="0" ry="0" width="8" height="0" /> 
      <rect x="8" y="1" rx="22" ry="22" width="286" height="410" /> 
      <rect x="9" y="474" rx="8" ry="8" width="56" height="14" /> 
      <rect x="76" y="475" rx="8" ry="8" width="60" height="13" /> 
      <rect x="10" y="426" rx="15" ry="15" width="185" height="27" />
    </ContentLoader>
    
}
  
  export default MyLoader