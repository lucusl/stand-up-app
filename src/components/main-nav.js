import React, { Component } from 'react';
import '../styles/nav.style.css';
var NavLink = require('react-router-dom').NavLink;


function Navigation(props){

return(

	<ul id= 'nav'> 
		<NavLink activeClassName = 'active-nav' to ='/completed'> <li>Completed</li> </NavLink>
		<NavLink exact activeClassName = 'active-nav' to ='/'> <li>Critical Clients</li> </NavLink>
		<NavLink activeClassName = 'active-nav' to ='/battle'> <li>Critical Issues</li> </NavLink>
	</ul>
	
	  )
}

export default Navigation;
