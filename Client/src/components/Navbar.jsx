import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light py-0">
            <div className="container-fluid">
              <NavLink className="navbar-brand" id="logo" to="#">
                {/* <!-- Red <span>Wings</span> --> */}
                <img src="../src/assets/images/logo.png" alt="logo" width="60px" />Red Wings
            </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/" id="home">HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about" id="about">ABOUT</NavLink>
                  </li>
                  
                  <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="services" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SERVICES
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="services">
          {/* <!-- <NavLink className="dropdown-item" to="#">Donate Blood</NavLink> --> */}

            <NavLink className="dropdown-item" to="/">Donate Blood</NavLink>
          
          <NavLink className="dropdown-item" to="/">Ask For Blood</NavLink>
        </div>
      </li>
                  <li className="contactnav nav-item mx-0">
                    <NavLink className="nav-link " to="/contact" id="contact">CONTACT US</NavLink>
                  </li>
                </ul>
                <div className="d-flex navbtn">
                    
                    
                    {/* <NavLink to="/">
                    <button id="sign" className="btn btn-secondary" type="submit">Logout</button>
                    </NavLink> */}
                    <NavLink to="/signup">
                    <button className="btn btn-outline-danger sign" type="submit">SIGNUP</button>
                    </NavLink>
                   
                    
                    <NavLink to="/login">
                    <button className="btn btn-outline-danger sign" type="submit">LOGIN</button>
                    </NavLink>
                    
                </div>
              </div>
            </div>
          </nav>
        
    </div>
  )
}

export default Navbar;
