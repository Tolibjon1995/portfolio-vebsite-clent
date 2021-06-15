
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { FaFacebook, FaTelegram} from "react-icons/fa";
import './styles/navbar.scss';
import { useLocation } from "react-router-dom";

const Navbars = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  const location = useLocation();
  console.log(location);
  
  return (
    <div className="nav-color">
    <div className='container'>
      <Navbar color="faded" light>
              <Link to="/" className="mr-auto navbar-brend">
              <img src="/img/logo.png" alt="" />
              </Link>
        <nav class="navbar navbar-expand-sm bir">      
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to='/' className={`nav-link ${location.pathname === "/" ? "active" :""} `}>Bosh sahifa</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className={`nav-link ${location.pathname === "/about" ? "active" :""} `}>O'zim haqimda</Link>
            </li>
            <li className="nav-item">
            <Link to='/portfolio' className={`nav-link ${location.pathname === "/portfolio" ? "active" :""} `}>Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link to='/contakt' className={`nav-link ${location.pathname === "/contakt" ? "active" :""} `}>Contact</Link>
            </li>
          </ul>
          <a href="https://github.com/Tolibjon1995" className='link'>
          <span><AiFillGithub/></span>
          </a>
          <a href="https://www.facebook.com/tolibjon.tursunov.796">
          <span><FaFacebook/></span>
          </a>
          <a href="https://www.linkedin.com/feed/">
          <span><AiFillLinkedin/></span>
          </a>
          <a href="https://t.me/React_js_UZB">
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
              <NavLink href="/about">O'zim haqimda</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>          
            </Nav>
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
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default Navbars;