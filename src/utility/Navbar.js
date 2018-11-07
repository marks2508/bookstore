import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
  fontFamily: 'Playfair Display',
  fontSize: '15px',
  height: '20%',
  marginTop: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block'
};
const navbarAuthStyle = {
  fontFamily: 'Playfair Display',
  fontSize: '18px',
  color: 'grey',
  margin: '0px 35px 0px 35px',
  float: 'right',
  padding: '0px 10px 0px 10px'
};
const navbarLinksStyle = {
  fontFamily: 'Playfair Display',
  fontSize: '18px',
  color: 'grey',
  marginTop: '0px',
  float: 'left',
  padding: '0px 35px 0px 35px'
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
          <li><a href="#" onClick={this.showSearchBar}><i style={navbarAuthStyle} className="material-icons"></i></a></li>

          { Auth.isAuthenticated() && <li><Link to="/about" style={navbarLinksStyle}>About </Link></li>}
          { Auth.isAuthenticated() && <li><Link to="/nytimes" style={navbarLinksStyle}>NY Times Bestsellers</Link></li>}
          { Auth.isAuthenticated() && <li><Link to="/" style={navbarLinksStyle} className="standard-button">All users</Link></li>}
          { Auth.isAuthenticated() && <li><Link to="/" style={navbarAuthStyle} className="standard-button">My profile</Link></li>}
          { Auth.isAuthenticated() && <li><Link to="/" style={navbarAuthStyle} className="standard-button">My library</Link></li>}
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
