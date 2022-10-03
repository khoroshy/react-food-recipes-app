import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import checked from '../../assets/img/checked.png';
import './Success.scss';

const Success = () => {
  return (
    <div className="success">
        <motion.img animate={{scale: 1,}} transition={{ ease: "anticipate", duration: 1 }} initial={{scale: 0,}} src={checked} alt="Payment completed" className="success__img" />
        <motion.h2 animate={{opacity: 1,}} initial={{opacity: 0,}} transition={{ ease: "anticipate", duration: 1 }} className="success__heading">Thank you!</motion.h2>
        <motion.p animate={{opacity: 1,}} initial={{opacity: 0,}} transition={{ ease: "anticipate", duration: 1 }} className="success__message">Our managers will contact you shortly to provide you with a copy of our E-Book! Stay tuned ;)</motion.p>
        <Link to='/'><Button className='success__btn btn' text='Homepage' /></Link>
    </div>
  )
}

export default Success