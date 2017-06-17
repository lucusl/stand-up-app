import React, { Component } from 'react';
import '../styles/video-bg-style.css';
import PropTypes from 'prop-types';


function FullScreenVidBg(props){

return(
		<video poster={props.poster} id="bgvid" playsInline autoPlay muted loop >
			<source src="images/polina.webm" type="video/webm"/>
			<source src={props.mp4} type="video/mp4"/>
		</video>
	  )
}



FullScreenVidBg.PropTypes = {
	poster: PropTypes.string,
	mp4: PropTypes.string,
	webm: PropTypes.string
};

export default FullScreenVidBg;
