import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './../../logo.jpeg';
import './header.scss';

const Header = () => 
	<Navbar expand="lg" className="app-header">
	  <Navbar.Brand href="#">
	  	<img
	        src={logo}
	        width="30"
	        height="30"
	        className="d-inline-block align-top"
	        alt="React Bootstrap logo"
	      />
	  	&nbsp; Insight Global - Restaurant App
	  </Navbar.Brand>
	</Navbar>
 
export default Header;