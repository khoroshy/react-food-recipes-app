import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.scss';
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__link'><img src={logo} alt="Just Recipes logo" className="header__logo" /></Link>
      <Search formClass='header__form' inputClass='header__search'  />
      <ul className="header__menu">
        <NavLink to='/' className='header__link'><li className="header__item">Home</li></NavLink>
        <NavLink to='/about' className='header__link'><li className="header__item">About</li></NavLink>
        <NavLink to='/contact' className='header__link'><li className="header__item">Contact Us</li></NavLink>
      </ul>
    </header>
  )
}

export default Header