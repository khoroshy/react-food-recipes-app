import React, { useRef, useState } from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
          setSubmitted(true)
      }, (error) => {
          alert('Oops! Something went wrong. Please try again later...')
      });
  };

  return (
    <div className="contact">
      <h3 className="contact__heading">Leave a message to our team</h3>
      <form className='contact__form' ref={form} onSubmit={sendEmail}>
        <label className='contact__label'>Name</label>
        <input className='contact__input' type="text" name="name" required/>
        <label className='contact__label'>Email</label>
        <input className='contact__input' type="email" name="email" required/>
        <label className='contact__label'>Message</label>
        <textarea className='contact__textarea' name="message" required/>
        <input className='contact__submit' type="submit" value="Send" />
        {submitted == false ? '' : <p className="contact__msg">Your message was sucessfully sent!</p>}
      </form>
    </div>
  )
}

export default Contact