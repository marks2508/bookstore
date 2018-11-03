import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from './search';
import ProductGrid from './productGrid';
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
  fontSize: '20px',
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

class Navbar extends React.Component {

  state = {
    showSearch: false
  }


  logout = e => {
    e.preventDefault();
    Auth.logout();
    this.props.history.push('/');
  }

  showSearchBar = e => {
    e.preventDefault();
    if (this.state.showSearch === false) {
      this.setState({
        showSearch: true
      });
    } else {
      this.setState({
        showSearch: false
      });
    }
  }

  render() {
    return(
      <div style={navbarStyle}>
        <ul style={clearfix}>
          <a href="/"><img style={navbarLogoStyle}  src="../assets/Logo.png" /></a>
          <li><a href="#" onClick={this.showSearchBar}><i style={navbarIconStyle} className="material-icons">search</i></a></li>

          { Auth.isAuthenticated() && <li><Link to="/books/new" style={navbarIconStyle}>Add a book</Link></li>}
          { Auth.isAuthenticated() && <li><Link to="/nytimes" style={navbarAuthStyle}>NY Times Bestsellers</Link></li>}
          { !Auth.isAuthenticated() && <li><Link to="/login" style={navbarAuthStyle} className="standard-button">Login</Link></li>}
          {' '}
          { !Auth.isAuthenticated() && <li><Link to="/register" style={navbarAuthStyle} className="standard-button">Register</Link></li> }
          {' '}
          { Auth.isAuthenticated() && <a href="#" style={navbarAuthStyle} className="standard-button" onClick={this.logout}>Logout</a> }
        </ul>
        <hr style={navbarLine}/>
        {this.state.showSearch ? <ProductGrid /> : null}
      </div>
    );
  }
}

export default withRouter(Navbar);
