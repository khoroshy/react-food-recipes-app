import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import Robot from '../../assets/img/error.png'
import './Error.scss';

const Error = () => {
  return (
    <section className="error">
      <div className="error__container">
        <img src={Robot} alt="Error Message Robot" className="error__img" />
        <h2 className="error__message">Hmm...Something is wrong</h2>
        <p className="error__sub-message">We searched everywhere, but we could not find the page you are looking for.
        <br/> What about starting a new journey from a better place?</p>
        <Link to='/' className='error__link'><Button className='btn error__btn' text='Go to Homepage' onClick='' /></Link>
      </div>
    </section>
  )
}

export default Error