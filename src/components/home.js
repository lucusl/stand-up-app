import React, { Component } from 'react';
import '../styles/home.styles.css';
var NavLink = require('react-router-dom').NavLink;


function Home(props){

		return(

			<div className='container'> 
			    <h1>Stand up</h1>
            	<p>MORNING SESSION TUESDAY 20TH MAY</p>
            	<NavLink to ='/completed'>
	            	<button className="red-btn">
	               		 <p>ready to start</p>
	            	</button>
            	</NavLink>

            	<footer className="uppercase">
            		<p>bought to you by :</p>
            		<img className="tc-logo" src={require('../assets/images/TC.png')} />
            	</footer>
			</div>

			  )
		}

export default Home;
