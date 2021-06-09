
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { FaFacebook, FaTelegram} from "react-icons/fa";
import './styles/navbar.scss'

const Navbars = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <div className="nav-color">
    <div className='container'>
      <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto navbar-brend">
              <img src="/img/logo.png" alt="" />
              </NavbarBrand>
        <nav class="navbar navbar-expand-sm bir">      
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to='/' className='nav-link'>Bosh sahifa</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className='nav-link'>O'zim haqimda</Link>
            </li>
            <li className="nav-item">
            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link to='/contact' className='nav-link'>Contact</Link>
            </li>
          </ul>
          <a href="#" className='link'>
          <span><AiFillGithub/></span>
          </a>
          <a href="#">
          <span><FaFacebook/></span>
          </a>
          <a href="#">
          <span><AiFillLinkedin/></span>
          </a>
          <a href="#">
          <span><FaTelegram/></span>
          </a>
        </nav>          
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Bosh sahifa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">O'zim haqimda</NavLink>
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
    </div>
  );
}

export default Navbars;