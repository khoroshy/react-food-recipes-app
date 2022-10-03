import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Button from '../Button/Button';
import book from '../../assets/img/cover.png';
import './Book.scss';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Book = () => {
  const [counter, setCounter] = useState(false);
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1LoQ0sIKjql1tEIGaWOgaYPf",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
        <section className="book">
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)} className='book__details'>
                <h3 className="book__subheading">Best Food Goes On And Always On</h3>
                <h2 className="book__heading">Get Recipes from Our E-Book</h2>
                <div className="book__statistics">
                    <div className="book__stat-item">
                        {counter && <p className="book__num"><CountUp start={0} end={1500} duration={2} delay={0}/>+</p>}
                        <p className="book__num-title">Sold Books</p>
                    </div>
                    <div className="book__stat-item">
                        {counter && <p className="book__num"><CountUp start={0} end={850} duration={2} delay={0}/>+</p>}
                        <p className="book__num-title">5-Star Reviews</p>
                    </div>
                    <div className="book__stat-item">
                        {counter && <p className="book__num"><CountUp start={0} end={320} duration={2} delay={0}/>+</p>}
                        <p className="book__num-title">Offline Stores</p>
                    </div>
                </div>
                <Button className='book__btn btn' text='Order online' data={redirectToCheckout}/>
            </ScrollTrigger>
            <img src={book} alt="1000 Recipes Book" className="book__img" />
        </section>

  )
}

export default Book;