import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../lib/Auth';

const navbarStyle = {
  height: '375px',
  float: 'none',
  textAlign: 'center',
  backgroundColor: 'white'
};
const navbarLogoStyle = {
  textAlign: 'center',
  height: '100%',
  marginTop: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block'
};
const navbarIconStyle = {
  color: 'mediumblue',
  marginTop: '-100px',
  float: 'right',
  padding: '40px'
};
const navbarAuthStyle = {
  fontFamily: 'Niramit',
  color: 'mediumblue',
  marginTop: '-100px',
  float: 'left',
  padding: '40px'
};

const clearfix = {
  overflow: 'hidden'
};
const navbarLine = {
  height: '10px',
  backgroundColor: 'mediumblue'
};

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <div style={navbarStyle}>
      <ul style={clearfix}>
        <li><img style={navbarLogoStyle}  src="../assets/Logo.png" /></li>
        <li><a href="sass.html"><i style={navbarIconStyle} className="material-icons">search</i></a></li>
        <li><a href="badges.html"><i style={navbarIconStyle} className="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i style={navbarIconStyle} className="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i style={navbarIconStyle} className="material-icons">more_vert</i></a></li>
        { !Auth.isAuthenticated() && <li><Link to="/login" style={navbarAuthStyle} className="standard-button">Login</Link></li>}
        {' '}
        { !Auth.isAuthenticated() && <li><Link to="/register" style={navbarAuthStyle} className="standard-button">Register</Link></li> }
        {' '}
        { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a> }
      </ul>
      <hr style={navbarLine}/>
    </div>
  );
};

export default withRouter(Navbar);
