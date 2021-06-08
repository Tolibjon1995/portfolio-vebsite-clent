
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styles/navbar.scss'

const Navbars = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='container'>
      <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto navbar-brend">
              <img src="/img/logo.jpg" alt="" />
              </NavbarBrand>
        <nav class="navbar navbar-expand-sm bir">      
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className='nav-link'>About</Link>
            </li>
            <li className="nav-item">
            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link to='/contact' className='nav-link'>Contact</Link>
            </li>
        </ul>
        </nav>          
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;