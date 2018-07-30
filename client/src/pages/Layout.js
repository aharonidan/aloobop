import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Layout.css'


class Layout extends Component {
  render() {
    return (
    	<div>
	      <h1>Hello World!</h1>
	      {this.props.children}
	      <div class='tabs is-fullwidth'>
		      <ul>
		        <li>
		          <Link to="/">Standings</Link>
		        </li>
		        <li>
		          <Link to="/group">Group</Link>
		        </li>
		        <li>
		          <Link to="/knockout">Knockout</Link>
		        </li>
		      </ul>
	      </div>
      </div>
    );
  }
}

export default Layout;
