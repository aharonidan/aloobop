import React, { Component } from 'react';
import '../styles/Layout.css'
import NavLink from '../components/NavLink'


class Layout extends Component {
  render() {
    return (
    	<div>
	      <h1>Hello World!</h1>
	      {this.props.children}
	      <div className='tabs is-fullwidth'>
		      <ul id='footer'>
	          <NavLink to="/">Standings</NavLink>
	          <NavLink to="/group">Group</NavLink>
	          <NavLink to="/knockout">Knockout</NavLink>
		      </ul>
	      </div>
      </div>
    );
  }
}

export default Layout;
