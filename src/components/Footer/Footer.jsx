import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import fb from '../../assets/img/icons/facebook.svg';
import inst from '../../assets/img/icons/instagram.svg';
import tw from '../../assets/img/icons/twitter.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__info">
        <img src={logo} alt="Just Recipes Logo" className="footer__logo" />
        <p className="footer__logo-heading">Just Recipes - Best Food Recipes Library based on Spoonacular API</p>
        <div className="footer__icons">
        <a href="https://www.facebook.com/" target='_blank' className="footer__link"><img src={fb} alt="Facebook icon" className="footer__ico" /></a>
        <a href="https://www.instagram.com/" target='_blank' className="footer__link"><img src={inst} alt="Instagram icon" className="footer__ico" /></a>
        <a href="https://www.twitter.com/" target='_blank' className="footer__link"><img src={tw} alt="Twitter icon" className="footer__ico" /></a>
        </div>
      </div>
      <div className="footer__info">
        <h5 className="footer__heading">Company</h5>
        <Link to='/about' className='footer__link'>About Us</Link>
        <Link to='/contact' className='footer__link'>Contact Us</Link>
        <a href="https://drive.google.com/file/d/14kW5gFbbhDM1LD7S3g8LHQLiYAbG-Egp/view" target='_blank' className="footer__link">Partnership</a>
      </div>
    </footer>
  )
}

export default Footer